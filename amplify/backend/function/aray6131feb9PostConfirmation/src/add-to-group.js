/* eslint-disable-line */
const aws = require('aws-sdk');

const groupName = 'Users';

exports.handler = async (event, context) => {
  const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' });
  const groupParams = {
    GroupName: groupName,
    UserPoolId: event.userPoolId,
  };

  const addUserParams = {
    GroupName: groupName,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };

  try {
    await cognitoidentityserviceprovider.getGroup(groupParams).promise();
  } catch (e) {
    await cognitoidentityserviceprovider.createGroup(groupParams).promise();
  }

  try {
    await cognitoidentityserviceprovider.adminAddUserToGroup(addUserParams).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(event),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
