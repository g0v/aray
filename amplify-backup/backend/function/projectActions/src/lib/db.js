const docClient = require('./docClient');

const {
  API_ARAY_CONTRIBUTIONTABLE_NAME,
  API_ARAY_PROJECTTABLE_NAME,
  API_ARAY_EVENTATTENDANCETABLE_NAME,
  API_ARAY_EVENTTABLE_NAME,
  API_ARAY_TAGTABLE_NAME,
  API_ARAY_PROJECTTAGTABLE_NAME,
  API_ARAY_USERPROJECTTABLE_NAME,
  API_ARAY_USERTABLE_NAME,
} = process.env;

exports.getProject = async (id) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_PROJECTTABLE_NAME,
    Key: { id },
  }).promise();

  return Item;
};

exports.getTag = async (id) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_TAGTABLE_NAME,
    Key: { id },
  }).promise();

  return Item;
};

exports.getUser = async (username) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_USERTABLE_NAME,
    Key: { username },
  }).promise();

  return Item;
};

exports.getUserProject = async (username, projectId) => {
  const items = await docClient.queryAll({
    TableName: API_ARAY_USERPROJECTTABLE_NAME,
    IndexName: 'byUser',
    KeyConditionExpression: 'username = :username AND projectId = :projectId',
    ExpressionAttributeValues: {
      ':username': username,
      ':projectId': projectId,
    },
    ScanIndexForward: false,
  });

  return items[0];
};

exports.getEvent = async (id) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_EVENTTABLE_NAME,
    Key: { id },
  }).promise();

  return Item;
};

exports.getEventAttendance = async (id) => {
  const { Item } = await docClient.get({
    TableName: API_ARAY_EVENTATTENDANCETABLE_NAME,
    Key: { id },
  }).promise();

  return Item;
};

exports.listProjectUsers = async (projectId) => {
  const items = await docClient.queryAll({
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

exports.updateTags = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_TAGTABLE_NAME, items);
};

exports.updateProjectTags = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_PROJECTTAGTABLE_NAME, items);
};

exports.removeProjectTags = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchDelete(API_ARAY_PROJECTTAGTABLE_NAME, 'id', undefined, items);
};

exports.updateUsers = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_USERTABLE_NAME, items);
};

exports.updateUserProjects = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_USERPROJECTTABLE_NAME, items);
};

exports.updateContributions = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_CONTRIBUTIONTABLE_NAME, items);
};

exports.updateEvents = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_EVENTTABLE_NAME, items);
};

exports.updateEventAttendances = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_EVENTATTENDANCETABLE_NAME, items);
};
