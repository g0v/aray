const AWS = require('aws-sdk');
const { AWS_PROFILE, AWS_REGION } = require('./config');
const credentials = new AWS.SharedIniFileCredentials({ profile: AWS_PROFILE });
AWS.config.credentials = credentials;
const config = {
  region: AWS_REGION,
};
const cognito = new AWS.CognitoIdentityServiceProvider(config);

module.exports = cognito;

cognito.createUser = async (inUserPoolId, inWebClientId, inUserName, inEmail, inGroupName) => {
  try {
    const params = {
      ClientId: inWebClientId,
      Username: inUserName,
      Password: 'password',
      UserAttributes: [
        {
          Name: 'email',
          Value: inEmail,
        },
        {
          Name: 'name',
          Value: inUserName,
        },
      ],
    };

    await cognito.signUp(params).promise();
  } catch (err) {
    if (err.code !== 'UsernameExistsException') {
      throw new Error(err);
    }
  }

  try {
    const params = {
      UserPoolId: inUserPoolId,
      Username: inUserName,
    };
    await cognito.adminConfirmSignUp(params).promise();
  } catch (err) {
    if (err.message !== 'User cannot be confirmed. Current status is CONFIRMED') {
      throw new Error(err);
    }
  }

  if (!inGroupName) return;

  try {
    const params = {
      UserPoolId: inUserPoolId,
      Username: inUserName,
    };
    const { Groups: groups } = await cognito.adminListGroupsForUser(params).promise();
    if (groups.length > 1 || !groups.find(({ GroupName }) => GroupName === inGroupName)) {
      const removePromises = groups.map(async ({ GroupName }) => {
        const params = {
          GroupName,
          UserPoolId: inUserPoolId,
          Username: inUserName,
        };
        await cognito.adminRemoveUserFromGroup(params).promise();
      });

      await Promise.all(removePromises);

      const params = {
        GroupName: inGroupName,
        UserPoolId: inUserPoolId,
        Username: inUserName,
      };
      await cognito.adminAddUserToGroup(params).promise();
    }
  } catch (err) {
    throw new Error(err);
  }
};
