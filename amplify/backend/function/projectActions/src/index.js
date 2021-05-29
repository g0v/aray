/* eslint-disable no-tabs */
/* Amplify Params - DO NOT EDIT
	API_ARAY_CONTRIBUTIONTABLE_ARN
	API_ARAY_CONTRIBUTIONTABLE_NAME
	API_ARAY_GRAPHQLAPIIDOUTPUT
	API_ARAY_KEYWORDTABLE_ARN
	API_ARAY_KEYWORDTABLE_NAME
	API_ARAY_NEEDTABLE_ARN
	API_ARAY_NEEDTABLE_NAME
	API_ARAY_PROJECTKEYWORDTABLE_ARN
	API_ARAY_PROJECTKEYWORDTABLE_NAME
	API_ARAY_PROJECTNEEDTABLE_ARN
	API_ARAY_PROJECTNEEDTABLE_NAME
	API_ARAY_PROJECTTABLE_ARN
	API_ARAY_PROJECTTABLE_NAME
	API_ARAY_PROJECTTAGTABLE_ARN
	API_ARAY_PROJECTTAGTABLE_NAME
	API_ARAY_PROJECTTASKTABLE_ARN
	API_ARAY_PROJECTTASKTABLE_NAME
	API_ARAY_TAGTABLE_ARN
	API_ARAY_TAGTABLE_NAME
	API_ARAY_USERPROJECTTABLE_ARN
	API_ARAY_USERPROJECTTABLE_NAME
	API_ARAY_USERTABLE_ARN
	API_ARAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const resolvers = require('./resolvers');

exports.handler = async (event) => {
  console.log(event);
  const { typeName, fieldName } = event;
  const typeHandler = resolvers[typeName];
  if (typeHandler) {
    const resolver = typeHandler[fieldName];
    if (resolver) {
      try {
        return resolver(event);
      } catch (e) {
        console.log(e);
        throw new Error(e);
      }
    }
  }
  throw new Error(`Resolver ${typeName}/${fieldName} not found.`);
};
