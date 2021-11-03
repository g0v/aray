const path = require('path');

// Auto generated after push
const graphqlSchema = require(path.join(__dirname, '../src/graphql/schema.json'));

const { types } = graphqlSchema.data.__schema;

const handleType = (inType, inValue) => {
  if (!inType) return;

  const { kind, name, ofType } = inType;
  if (kind === 'NON_NULL' && (inValue === null || inValue === undefined)) {
    return 'not nullable';
  }

  if (kind === 'ENUM') {
    // check enum type
  } else {
    switch (name) {
    case 'AWSDate':
      if (inValue && !`${inValue}`.match(/^\d{4}[./-]\d{2}[./-]\d{2}$/)) {
        return 'not a valid date format';
      }
      break;
    case 'AWSDateTime':
      if (inValue && inValue !== new Date(inValue).toISOString()) {
        return 'not a valid ISO String';
      }
      break;
    case 'Int':
      if (inValue !== void(0) && !isInt(inValue)) {
        return 'not a float';
      }
      break;
    case 'Float':
      if (inValue !== void(0) && !isFloat(inValue) && !isInt(inValue)) {
        return 'not a float';
      }
      break;
    case 'ID':
    case 'String':
    default:
      break;
    }
  }

  return handleType(ofType, inValue);
};

class Schema {
  constructor(inTypeName) {
    console.log('inTypeName', inTypeName);
    const { inputFields } = inTypeName === 'DataMigration' ? { inputFields: [] } :
      types.find(({ name }) => name === `Create${inTypeName}Input`);

    this.inputFields = inputFields;

    // console.log(require('util').inspect(inputFields, { depth: 10 }));
  }

  validate(data) {
    const { inputFields } = this;
    const errors = [];

    inputFields.forEach(({ name, type }) => {
      const value = data[name];
      const error = handleType(type, value);
      if (error) {
        errors.push(`${name} ${error}`);
      }
    });

    return errors.length > 0 ? errors : null;
  }
}

function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

module.exports = Schema;
