const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');

const prompt = require('../prompt');
const docClient = require('../docClient');
const { writeData } = require('../helper');

(async () => {
  try {
    const {
      tableNames,
    } = await prompt();

    const dbMigrationTableName = tableNames.find((x) => x.startsWith('DataMigration-'));

    const sourceDir = path.join(__dirname, 'source');
    const sources = fs.readdirSync(sourceDir).filter((x) => x.endsWith('.csv'));

    const promises = sources.map(async (source) => {
      const seedName = `seed_${source}`;

      const { Item: existingScript } = await docClient.get({
        TableName: dbMigrationTableName,
        Key: {
          name: seedName,
        },
      }).promise();

      if (existingScript) {
        return console.log(`Skipping... ${seedName}`);
      }

      const data = await csvtojson({ checkType: true }).fromFile(path.join(sourceDir, source));

      const typeName = source.replace('.csv', '');
      const tableName = tableNames.find((x) => x.startsWith(`${typeName}-`));

      await writeData(tableName, typeName, data);
      await writeData(dbMigrationTableName, 'DataMigration', [{ name: seedName, notes: 'Seed Data' }]);
    });
    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
})();
