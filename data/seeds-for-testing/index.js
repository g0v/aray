const csvtojson = require('csvtojson');
const path = require('path');
const fs = require('fs');

const prompt = require('../prompt');
const { writeData } = require('../helper');
// const cognito = require('../cognito');

(async () => {
  try {
    const {
      env,
      // userPoolId,
      // webClientId,
      tableNames,
    } = await prompt();

    if (env === 'production' || env === 'master' || env === 'prd') {
      console.log('These data are for testing only.');
      return process.exit(1);
    }

    const sourceDir = path.join(__dirname, 'source');
    const sources = fs.readdirSync(sourceDir).filter((x) => x.endsWith('.csv') || x.endsWith('.json'));

    const promises = sources.map(async (source) => {
      const sourcePath = path.join(sourceDir, source);
      const data = source.endsWith('.csv') ?
        await csvtojson({ checkType: true }).fromFile(sourcePath) :
        require(sourcePath);

      const typeName = source.replace('.csv', '').replace('.json', '');
      const tableName = tableNames.find((x) => x.startsWith(`${typeName}-`));

      await writeData(tableName, typeName, data);
    });

    // const email = 'abc@gmail.com';
    // promises.push(cognito.createUser(userPoolId, webClientId, 'admin', email, 'Admins'));
    // promises.push(cognito.createUser(userPoolId, webClientId, 'demo', email, 'Users'));

    await Promise.all(promises);
  } catch (e) {
    console.log(e);
  }
})();
