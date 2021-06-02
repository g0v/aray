import { request, asyncListAll } from 'utils/graph';
import { sortBy } from 'utils/sorting';

export const getUsernameSchema = async (inUsername) => {
  if (inUsername) {
    const { data: { getUser: user } } = await request( /* GraphQL */ `
      query GetUser($username: String!) {
        getUser(username: $username) {
          username
          name
        }
      }
    `, { username: inUsername });
    return {
      enum: [user.username],
      enumNames: [user.name],
    };
  }

  let records = (await asyncListAll( /* GraphQL */ `
      query ListUsers(
        $username: String
        $filter: ModelUserFilterInput
        $limit: Int
        $nextToken: String
        $sortDirection: ModelSortDirection
      ) {
        listUsers(
          username: $username
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          sortDirection: $sortDirection
        ) {
          items {
            username
            name
          }
          nextToken
        }
      }
    `));

  records = records
    .sort(sortBy('name'));

  return {
    enum: records.map(({ username }) => username),
    enumNames: records.map(({ name, username }) => `${name} (${username})`),
  };
};

export const getProjectTaskIdSchema = async (projectId) => {
  let records = (await asyncListAll( /* GraphQL */ `
      query GetProjectTasksByProjectIdByStatus(
        $projectId: ID
        $status: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelProjectTaskFilterInput
        $limit: Int
        $nextToken: String
      ) {
        getProjectTasksByProjectIdByStatus(
          projectId: $projectId
          status: $status
          sortDirection: $sortDirection
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          items {
            id
            status
            summary
            description
            hours
          }
          nextToken
        }
      }
    `, { projectId, status: { eq: 'active' } }));

  records = records
    .sort(sortBy('name'));

  return {
    enum: [null, ...records.map(({ id }) => id)],
    enumNames: ['無', ...records.map(({ summary, hours }) => `${summary} (+${hours})`)],
    data: records,
  };
};
