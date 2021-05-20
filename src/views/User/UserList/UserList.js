import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import { asyncListAll } from 'utils/graph';
// import { listUsers } from 'graphql/queries';
import UserCard from 'components/UserCard';

export default function UserList() {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await asyncListAll(/* GraphQL */ `
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
              status
              name
              email
              selfIntroduction
              # projects {
              #   items {
              #     id
              #     projectId
              #     username
              #     role
              #     completedHours
              #     completedTasks
              #     createdAt
              #     updatedAt
              #   }
              #   nextToken
              # }
              keywords {
                items {
                  # id
                  # keywordId
                  keyword {
                    label
                  }
                  # username
                  # createdAt
                  # updatedAt
                }
                nextToken
              }
              createdAt
              createdBy
              updatedAt
              updatedBy
            }
            nextToken
          }
        }
      `);
      setUsers(data);
    })();
  }, []);

  return (
    <Container>
      <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
        {t('userList_users')}
      </Typography>
      <Grid container spacing={2}>
        {users.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <UserCard user={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

UserList.propTypes = {};
