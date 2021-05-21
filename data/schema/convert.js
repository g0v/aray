const parse = require('graphql/language').parse;
const path = require('path');
const fs = require('fs');

const transform = require('./transform');

const sourceFilePath = path.join(__dirname, '../../amplify/backend/api/silvergate/build/schema.graphql');
const source = fs.readFileSync(sourceFilePath, 'utf8');

const output = transform(parse(source));

fs.writeFileSync('output.json', JSON.stringify(output, null, 2));
