const path = require('path');

const prompt = require('../prompt');
const { writeData } = require('../helper');

const importDataSets = [
  {
    typeName: 'Project',
    fileName: 'aray-projects.json',
  },
  {
    typeName: 'Event',
    fileName: 'aray-events.json',
  },
  {
    typeName: 'EventProject',
    fileName: 'aray-events-projects.json',
  },
  {
    typeName: 'User',
    fileName: 'aray-users.json',
  },
];

(async () => {
  try {
    const {
      tableNames,
    } = await prompt();

    await Promise.all(importDataSets.map(async ({ typeName, fileName }) => {
      const tableName = tableNames.find((x) => x.startsWith(`${typeName}-`));

      const data = require(path.join(__dirname, fileName));

      if (typeName === 'User') {
        data.forEach((item) => {
          item.email = item.email || 'unknown@aray.g0v.tw';
        });
      }

      if (typeName === 'Event') {
        const now = new Date().toISOString();
        data.forEach((item) => {
          item.description = item.description || '無';
          item.duration = item.duration || 60 * 60 * 1000;
          item.guestLimit = item.guestLimit || 10;
          item.attendanceCount = item.attendanceCount || 10;
          item.rsvpQuestion = item.rsvpQuestion || '無';
          item.rsvpLimit = item.rsvpLimit || 0;
          item.startDate = item.startDate || now;
          item.endDate = item.endDate || now;
          item.rsvpOpenTime = item.rsvpOpenTime || item.startDate;
          item.rsvpCloseTime = item.rsvpCloseTime || item.startDate;
        });
      }

      await writeData(tableName, typeName, data);
    }));
  } catch (e) {
    console.log(e);
  }
})();
