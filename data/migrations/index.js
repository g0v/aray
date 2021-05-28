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

    const scriptsDir = path.join(__dirname, 'scripts');
    const scripts = fs.readdirSync(scriptsDir)
      .filter((x) => x.endsWith('.js'))
      .sort((a, b) => a > b ? 1 : -1);

    const dbMigrationTableName = tableNames.find((x) => x.startsWith('DataMigration-'));

    await scripts.reduce(async (chain, script) => {
      await chain;
      const { Item: existingScript } = await docClient.get({
        TableName: dbMigrationTableName,
        Key: {
          name: script,
        },
      }).promise();

      if (existingScript) {
        return console.log(`Skipping... ${script}`);
      }

      const { exec } = require(path.join(scriptsDir, script));
      const result = await exec(tableNames);
      const data = {
        name: script,
        note: typeof result === 'string' ? result : JSON.stringify(result),
      };

      return writeData(dbMigrationTableName, 'DataMigration', [data]);
    }, Promise.resolve());
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();
