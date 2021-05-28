const moment = require('moment');
const { v1: uuidv1 } = require('uuid');

const { writeData } = require('../helper');

(async () => {
  const tableName = 'Contribution-w5utc7ntdvaf5d7ej3l432vzgu-dev';
  const targetUsername = 'demo';
  const targetProjectId = '8e4a2120-b8e0-11eb-90bd-9bb8cf94b265';
  const typeName = 'Contribution';

  const data = Array(250).fill({}).map((i, index) => {
    const timestamp = moment().add(-index, 'days').toISOString();
    return {
      id: uuidv1(),
      username: targetUsername,
      projectId: targetProjectId,
      summary: '幫忙',
      hours: getRandomIntInclusive(1, 50),
      createdAt: timestamp,
      updatedAt: timestamp,
    };
  });

  console.log(data[100]);
  try {
    await writeData(tableName, typeName, data);
  } catch (e) {
    console.log(e);
  }
})();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
