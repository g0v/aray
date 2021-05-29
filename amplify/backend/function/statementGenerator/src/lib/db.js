const docClient = require('./docClient');

const {
  API_ARAY_CONTRIBUTIONTABLE_NAME,
  // API_ARAY_PROJECTTABLE_NAME,
  API_ARAY_STATEMENTTABLE_NAME,
  // API_ARAY_USERPROJECTTABLE_NAME,
  API_ARAY_USERTABLE_NAME,
} = process.env;

exports.listUsers = () => {
  return docClient.scanAll({
    TableName: API_ARAY_USERTABLE_NAME,
  });
};

exports.getContributionsByUsernameByCreatedAt = async (username, from, to) => {
  return docClient.queryAll({
    TableName: API_ARAY_CONTRIBUTIONTABLE_NAME,
    IndexName: 'byUsernameByCreatedAt',
    KeyConditionExpression: 'username = :username AND createdAt BETWEEN :from AND :to',
    ExpressionAttributeValues: {
      ':username': username,
      ':from': from,
      ':to': to,
    },
    ScanIndexForward: false,
  });
};

exports.updateStatements = async (items) => {
  if (items.length === 0) return [];
  await docClient.batchUpdate(API_ARAY_STATEMENTTABLE_NAME, items);
};
