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
    const name = `${query
      .split('(')[0]
      .replace(/ +/g, ' ')
      .replace(/\n+/g, '')}`;
    global.logger.info(
      `API:${name} ${time} ms ${time > THRESHOLD ? '***' : ''}`,
    );
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

export async function fetchPaginatedData({ query, limit, setState, setIsLoading, initialData = [] }) {
  let allData = initialData;
  let nextToken = null;

  const username = localStorage.getItem('app:username');
  const authMode = username ? 'AMAZON_COGNITO_USER_POOLS' : 'API_KEY';

  setIsLoading(true); // 設定 loading state 為 true

  async function fetchData(nextToken) {
    const params = { limit: limit, nextToken: nextToken };
    console.log(`[fetchData] Requesting data with params: ${JSON.stringify(params)}`);

    try {
      const response = await request(query, params, authMode);
      const { items, nextToken: newNextToken } = response.data[Object.keys(response.data)[0]];
      console.log(`[fetchData] Received ${items.length} items`);
      allData = [...allData, ...items];
      setState(allData); // 使用 setState 更新 state

      if (newNextToken) {
        return newNextToken;
      } else {
        console.log('[fetchData] No next token found, request finished.');
        return null;
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      throw error;
    }
  }

  nextToken = await fetchData(nextToken);

  while (nextToken) {
    nextToken = await fetchData(nextToken);
  }

  console.log('[fetchPaginatedData] All data fetched, total items: ', allData.length);
}

