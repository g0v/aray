const moment = require('moment');
const AWS = require('aws-sdk');
const { v1: uuidv1 } = require('uuid');

const { AWS_PROFILE, AWS_REGION } = require('./config');
const docClient = require('./docClient');

const Schema = require('./Schema');

const credentials = new AWS.SharedIniFileCredentials({ profile: AWS_PROFILE });
AWS.config.credentials = credentials;
const config = {
  region: AWS_REGION,
};
const dynamodb = new AWS.DynamoDB(config);

export async function writeData(tableName, typeName, data = []) {
  const schema = new Schema(typeName);
  const errors = [];
  const now = moment().toISOString();
  data = data.map((item) => {
    item = Object.assign({
      __typename: typeName,
      createdAt: now,
      createdBy: 'SEED',
      updatedAt: now,
      updatedBy: 'SEED',
    }, item);

    if (item.id === '') {
      item.id = uuidv1();
    }

    Object.keys(item).forEach((key) => {
      if (item[key] === '') {
        delete item[key];
      }
    });

    const error = schema.validate(item);
    if (error) {
      errors.push(error);
    }

    return item;
  });

  if (errors.length > 0) {
    console.log(typeName);
    console.log(errors);
  }

  await docClient.batchUpdate(tableName, data, 300);
}

export async function purgeTable(tableName, partitionKey, sortKey) {
  if (!partitionKey) {
    const { Table: { KeySchema } } = await dynamodb.describeTable({ TableName: tableName }).promise();
    partitionKey = KeySchema.find(({ KeyType }) => KeyType === 'HASH');
    sortKey = KeySchema.find(({ KeyType }) => KeyType === 'HASH');
  }

  const params = {
    TableName: tableName,
  };
  const { Items, LastEvaluatedKey } = await docClient.scan(params).promise();

  await docClient.batchDelete(tableName, partitionKey, sortKey, Items, 300);
  if (LastEvaluatedKey) {
    return purgeTable(tableName, partitionKey, sortKey);
  }
}
