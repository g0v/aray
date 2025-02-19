const prompt = require('../prompt');
const docClient = require('../docClient');

const dataSets = [
  {
    targetUsername: 'john6',
    sourceUsernames: [
      'John_7fe98093-a62d-4dc7-89c1-9a2813acda5d',
      'jhuang_7ef0dcac-d0a8-4803-846a-7f9456930cbb',
    ],
  },
];

const updateTableRecords = async (tableName, indexName, key = 'username', targetUsername, sourceUsername) => {
  const items = await docClient.queryAll({
    TableName: tableName,
    IndexName: indexName,
    KeyConditionExpression: `${key} = :username`,
    ExpressionAttributeValues: {
      ':username': sourceUsername,
    },
    ScanIndexForward: false,
  });

  console.log(`Update ${items.length} items for ${tableName}`);

  if (items.length === 0) return;

  const updatedItems = items.map((item) => {
    item[key] = targetUsername;

    return item;
  });

  return docClient.batchUpdate(tableName, updatedItems);
};

(async () => {
  try {
    const {
      tableNames,
    } = await prompt();

    const getTableName = (typeName) => {
      return tableNames.find((x) => x.startsWith(`${typeName}-`));
    };

    await Promise.all(dataSets.map(async ({ targetUsername, sourceUsernames }) => {
      await Promise.all(sourceUsernames.map(async (sourceUsername) => {
        // pull the userProjects first
        const userProjects = await docClient.queryAll({
          TableName: getTableName('UserProject'),
          IndexName: 'byUser',
          KeyConditionExpression: `username = :username`,
          ExpressionAttributeValues: {
            ':username': sourceUsername,
          },
          ScanIndexForward: false,
        });

        const toUpdateProjects = [];
        const toUpdateUserProjects = [];
        // project managers
        if (userProjects.length > 0) {
          await Promise.all(userProjects.map(async (userProject) => {
            const { projectId } = userProject;

            const { Item: project } = await docClient.get({
              TableName: getTableName('Project'),
              Key: { id: projectId },
            }).promise();

            if (project.managers.includes(sourceUsername)) {
              project.managers = JSON.parse(JSON.stringify(project.managers).replace(sourceUsername, targetUsername));
              toUpdateProjects.push(project);
            }

            if (project.owner === sourceUsername) {
              project.owner = targetUsername;
              toUpdateProjects.push(project);
            }

            userProject.username = targetUsername;
            toUpdateUserProjects.push(userProject);
          }));
        }

        await Promise.all([
          // project owner and manager
          toUpdateProjects.length > 0 && docClient.batchUpdate(getTableName('Project'), toUpdateProjects),
          // user project
          toUpdateUserProjects.length > 0 && docClient.batchUpdate(getTableName('UserProject'), toUpdateUserProjects),
          // contribution
          updateTableRecords(
            getTableName('Contribution'),
            'byUsernameByCreatedAt',
            'username',
            targetUsername,
            sourceUsername,
          ),
          // statement
          updateTableRecords(
            getTableName('Statement'),
            'byUsernameByDate',
            'username',
            targetUsername,
            sourceUsername,
          ),
          // user need
          updateTableRecords(
            getTableName('UserNeed'),
            'byUser',
            'username',
            targetUsername,
            sourceUsername,
          ),
          // user tag
          updateTableRecords(
            getTableName('UserTag'),
            'byUser',
            'username',
            targetUsername,
            sourceUsername,
          ),
        ]);

        // delete user
        await docClient.delete({
          TableName: getTableName('User'),
          Key: {
            username: sourceUsername,
          },
        }).promise();
      }));
    }));
  } catch (e) {
    console.log(e);
  }
})();
