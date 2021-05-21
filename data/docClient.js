const AWS = require('aws-sdk');
const docClientExtra = require('aws-ddb-client-extra');
const { AWS_PROFILE, AWS_REGION } = require('./config');
const credentials = new AWS.SharedIniFileCredentials({ profile: AWS_PROFILE });
AWS.config.credentials = credentials;
const config = {
  region: AWS_REGION,
};
const docClient = docClientExtra(AWS.DynamoDB.DocumentClient, config);

module.exports = docClient;
