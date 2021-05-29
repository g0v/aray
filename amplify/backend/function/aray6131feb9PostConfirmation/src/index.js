/* eslint-disable-line */
const aws = require('aws-sdk');

const docClient = require('./lib/docClient');

const appsync = new aws.AppSync();

const { ENV } = process.env;

let appSyncApiId;
const DEFAULT_GROUP = 'Users';

exports.handler = async (event, context, callback) => {
  console.log(event);
  const { userName, userPoolId, request } = event;
  const { name, email } = request.userAttributes;

  appSyncApiId = await getAppSyncApiId();

  try {
    await Promise.all([
      setupGroup(userPoolId, userName),
      createUser(userName, name, email),
    ]);

    callback(null, event);
    // return {
    //   statusCode: 200,
    //   body: JSON.stringify(event),
    // };
  } catch (error) {
    console.log(error);
    callback(error);
    // return {
    //   statusCode: 500,
    //   body: JSON.stringify(error),
    // };
  }
};

const getAppSyncApiId = async () => {
  const apis = await appsync.listGraphqlApis().promise();
  console.log(apis);
  if (!apis || !apis.graphqlApis) return;
  const result = apis.graphqlApis.find(({ name }) => name === `aray-${ENV}`);
  console.log(result);

  return result.apiId;
};

const setupGroup = async (userPoolId, userName) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  // const groupParams = {
  //   GroupName: groupName,
  //   UserPoolId: userPoolId,
  // };
  // try {
  //   await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  // } catch (e) {
  //   await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  // }

  const checkGroupParams = {
    UserPoolId: userPoolId,
    Username: userName,
  };
  const { Groups: groups } = await cognitoidentityserviceprovider.adminListGroupsForUser(checkGroupParams).promise();
  console.log('groups', groups);
  if (groups.length > 0) return;

  const addUserParams = {
    GroupName: DEFAULT_GROUP,
    UserPoolId: userPoolId,
    Username: userName,
  };

  console.log('addUserParams', addUserParams);

  await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
};

const createUser = async (username, name, email) => {
  console.log('creatUser', { username, name, email });
  const now = new Date().toISOString();
  const tableName = `User-${appSyncApiId}-${ENV}`;

  const { Item: existingUser } = await docClient.get({
    TableName: tableName,
    Key: { username },
  }).promise();

  // could be password reset
  if (existingUser) return;

  const user = {
    __typename: 'User',
    username,
    status: 'active',
    name,
    email,
    totalCompletedHours: 0,
    totalCompletedTasks: 0,
    createdBy: 'System',
    createdAt: now,
    updatedBy: 'System',
    updatedAt: now,
  };

  console.log('user', user);

  await docClient.batchUpdate(tableName, [user]);
};
