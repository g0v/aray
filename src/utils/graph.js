import { API, graphqlOperation } from '@aws-amplify/api';
import to from 'await-to-js';
import { toastr } from 'react-redux-toastr';

import ApiErrorCodes from 'constants/ApiErrorCodes';

const THRESHOLD = 500;

const __DEV__ = process.env.NODE_ENV === 'development';

export async function request(query, params, authMode) {
  const startedAt = Date.now();
  const options = graphqlOperation(query, params);
  // https://github.com/aws-amplify/amplify-js/blob/master/packages/api/src/types/index.ts#L75
  const username = localStorage.getItem('app:username');
  options.authMode = username ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY';
  const [err, res] = await to(API.graphql(options));

  if (__DEV__) {
    // global.logger.debug(JSON.stringify(res, null, 2));

    const time = Date.now() - startedAt;
    const name = `${query.split('(')[0].replace(/ +/g, ' ').replace(/\n+/g, '')}`;
    global.logger.info(`API:${name} ${time} ms ${time>THRESHOLD?'***':''}`);
  }

  if (err) {
    global.logger.debug(options);
    global.logger.error(err);

    const msg = err.errors ? ApiErrorCodes[err.errors[0].errorType] || err.errors[0].message : err.message;
    toastr.error(msg);

    if (__DEV__) {
      global.logger.debug(query);
      global.logger.debug(JSON.stringify(params || {}, null, 2));
    }
    throw err;
  }

  return res;
}

export async function asyncListAll(operation, input = {}, allItems = []) {
  const res = await request(operation, {
    limit: 1000,
    ...input,
  });

  const { items, nextToken } = res.data[Object.keys(res.data)[0]];
  allItems = [...allItems, ...items];

  if (nextToken) {
    return asyncListAll(operation, { ...input, nextToken }, allItems);
  }

  return allItems;
}
