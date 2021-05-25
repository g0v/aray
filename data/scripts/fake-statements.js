const moment = require('moment');
const { v1: uuidv1 } = require('uuid');

const { writeData } = require('../helper');

(async () => {
  const tableName = 'Statement-w5utc7ntdvaf5d7ej3l432vzgu-dev';
  const targetUsername = 'demo';
  const typeName = 'Statement';

  const data = Array(365).fill({}).map((i, index) => {
    const timestamp = moment().add(-index, 'days').toISOString();
    return {
      id: uuidv1(),
      username: targetUsername,
      date: moment().add(-index, 'days').format('YYYY-MM-DD'),
      type: 'daily',
      totalCompletedHours: 9182,
      totalCompletedTasks: 428,
      completedHours: getRandomIntInclusive(0, 50),
      completedTasks: getRandomIntInclusive(1, 3),
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
