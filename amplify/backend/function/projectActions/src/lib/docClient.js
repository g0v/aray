const { DynamoDB } = require('aws-sdk');
const docClientExtra = require('aws-ddb-client-extra');

const { REGION } = process.env;

const config = {
  region: REGION,
};
const docClient = docClientExtra(DynamoDB.DocumentClient, config);

module.exports = docClient;
