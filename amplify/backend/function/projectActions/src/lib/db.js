const docClient = require('./docClient');

const {
  // API_ARAY_CONTRIBUTIONTABLE_NAME,
  API_ARAY_PROJECTTABLE_NAME,
  // API_ARAY_PROJECTTAGTABLE_NAME,
  // API_ARAY_PROJECTTASKTABLE_NAME,
  // API_ARAY_TAGTABLE_NAME,
  API_ARAY_USERPROJECTTABLE_NAME,
  // API_ARAY_USERTABLE_NAME,
} = process.env;

exports.getProject = async (id) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_PROJECTTABLE_NAME,
    Key: { id },
  }).promise();

  return Item;
};

exports.listProjectUsers = async (projectId) => {
  const items = docClient.queryAll({
    TableName: API_ARAY_USERPROJECTTABLE_NAME,
    IndexName: 'byProject',
    KeyConditionExpression: 'projectId = :projectId',
    ExpressionAttributeValues: {
      ':projectId': projectId,
    },
    ScanIndexForward: false,
  });

  return items;
};

exports.updateProjects = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_PROJECTTABLE_NAME, items);
};

exports.updateUserProjects = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_USERPROJECTTABLE_NAME, items);
};
