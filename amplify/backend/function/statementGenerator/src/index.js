/* eslint-disable no-tabs */
/* Amplify Params - DO NOT EDIT
	API_ARAY_CONTRIBUTIONTABLE_ARN
	API_ARAY_CONTRIBUTIONTABLE_NAME
	API_ARAY_GRAPHQLAPIIDOUTPUT
	API_ARAY_PROJECTTABLE_ARN
	API_ARAY_PROJECTTABLE_NAME
	API_ARAY_STATEMENTTABLE_ARN
	API_ARAY_STATEMENTTABLE_NAME
	API_ARAY_USERPROJECTTABLE_ARN
	API_ARAY_USERPROJECTTABLE_NAME
	API_ARAY_USERTABLE_ARN
	API_ARAY_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const moment = require('moment-timezone');
const { v1: uuidv1 } = require('uuid');

const {
  listUsers,
  getContributionsByUsernameByCreatedAt,
  updateStatements,
} = require('./lib/db');

const DEFAULT_TIME_ZONE = 'Asia/Taipei';
const CREATOR = 'System';

// Run daily at midnight 12:05am
// check the contributions for yesterday
exports.handler = async (event) => {
  const allUsers = await listUsers();

  const statements = await Promise.all(allUsers.map(processStatement));

  // console.log(statements);

  await updateStatements(statements);
};

async function processStatement({
  username,
  timeZone = DEFAULT_TIME_ZONE,
  totalCompletedHours = 0,
  totalCompletedTasks = 0,
}) {
  const now = moment().toISOString();
  const date = moment().tz(timeZone).add(-1, 'days').format('YYYY-MM-DD');
  const from = moment().tz(timeZone).add(-1, 'days').startOf('day').toISOString();
  const to = moment().tz(timeZone).add(-1, 'days').endOf('day').toISOString();

  // console.log({ now, date, from, to });
  const contributions = await getContributionsByUsernameByCreatedAt(username, from, to);

  let completedHours = 0;
  let completedTasks = 0;

  contributions.forEach(({ hours }) => {
    completedTasks++;
    completedHours += hours;
  });

  const statement = {
    __typename: 'Statement',
    id: uuidv1(),
    username,
    type: 'daily',
    date,
    totalCompletedHours,
    totalCompletedTasks,
    completedHours,
    completedTasks,
    createdAt: now,
    createdBy: CREATOR,
    updatedAt: now,
    updatedBy: CREATOR,
  };

  return statement;
}
