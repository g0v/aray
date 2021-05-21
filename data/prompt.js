const inquirer = require('inquirer');
const AWS = require('aws-sdk');

const { AWS_PROFILE, AWS_REGION } = require('./config');
const currentCloudBackendConfig = require('../amplify/#current-cloud-backend/amplify-meta.json');

const credentials = new AWS.SharedIniFileCredentials({ profile: AWS_PROFILE });
AWS.config.credentials = credentials;
const config = {
  region: AWS_REGION,
};
const appsync = new AWS.AppSync(config);

module.exports = async (bypassConfirm = false) => {
  const env = currentCloudBackendConfig.providers.awscloudformation.AuthRoleName.split('-')[2];

  if (!bypassConfirm && process.env.CONFIRMED !== '1') {
    const answer = await inquirer.prompt([
      { name: 'confirm', message: `Continue for env: ${env}?`, type: 'confirm', default: false },
    ]);

    if (answer.confirm === false) {
      process.exit(0);
    }
  }

  const apiId = currentCloudBackendConfig.api.silvergate.output.GraphQLAPIIdOutput;
  const { dataSources } = await appsync.listDataSources({ apiId }).promise();
  const tableNames = dataSources
    .filter(({ dynamodbConfig }) => dynamodbConfig)
    .map(({ dynamodbConfig }) => dynamodbConfig.tableName);

  const userPoolId = currentCloudBackendConfig.auth.silvergate46688fb7.output.UserPoolId;
  const webClientId = currentCloudBackendConfig.auth.silvergate46688fb7.output.AppClientIDWeb;

  return {
    env,
    userPoolId,
    webClientId,
    tableNames,
  };
};
