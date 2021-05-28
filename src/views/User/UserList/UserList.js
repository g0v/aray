import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';

import { asyncListAll } from 'utils/graph';
// import { listUsers } from 'graphql/queries';
import UserCard from 'components/UserCard';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';

export default function UserList({ data: inData, hideTitle = false }) {
  const { t } = useTranslation();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilter = (key) => (values) => {
    console.log(key, values);
    setFilters({
      ...filters,
      [key]: values,
    });
  };

  useEffect(() => {
    const filtered = users.filter((user) => {
      let shouldDisplay = true;
      Object.keys(filters).forEach((key) => {
        if (key === 'text') {
          shouldDisplay = [
            user.username, user.name, user.selfIntroduction,
          ].some((value) => {
            return value ? value.toLowerCase().includes(filters[key]) : false;
          });
          return;
        }
        const targetValues = filters[key];
        if (targetValues.length === 0) {
          return;
        }
        const result = user[key].items.some((item) => {
          return targetValues.includes(item[Object.keys(item)[0]].label);
        });
        if (!result) {
          shouldDisplay = false;
        }
      });

      return shouldDisplay;
    });

    setFilteredUsers(filtered);
  }, [filters, users]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = inData || await asyncListAll( /* GraphQL */ `
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
              keywords {
                items {
                  keyword {
                    label
                  }
                }
                nextToken
              }
              needs {
                items {
                  need {
                    label
                  }
                }
                nextToken
              }
            }
            nextToken
          }
        }
      `);
      setUsers(data);
      setIsLoading(false);
    })();
  }, [inData]);

  return (
    <Container maxWidth={false}>
      <Card style={{ padding: 16, marginTop: 16, marginBottom: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
              {t('userList_users')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <DataJoinEditorInput
              title={t('userList_searchByKeywords')}
              mode={'user-keyword'}
              joinData={[]}
              onChange={handleFilter('keywords')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DataJoinEditorInput
              title={t('userList_searchByNeeds')}
              mode={'user-need'}
              joinData={[]}
              onChange={handleFilter('needs')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="userList_searchByText"
              label={t('userList_searchByText')}
              variant="outlined"
              onChange={(e)=>{
                handleFilter('text')(e.target.value.toLowerCase());
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
      {/* TODO: pagination */}
      <Grid container>
        {filteredUsers.map((item, index)=>(
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <UserCard user={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

UserList.propTypes = {
  data: PropTypes.array,
  hideTitle: PropTypes.bool,
};
