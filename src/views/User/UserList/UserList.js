import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import { asyncListAll } from 'utils/graph';
// import { listUsers } from 'graphql/queries';
import UserCard from 'components/UserCard';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';
import Loading from 'components/Loading';

const classes = {
  container: `UserList-container`,
  card: `UserList-card`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.container}`]: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(8),
    backgroundColor: '#f2f2f2',
    height: '100vh',
  },

  [`& .${classes.card}`]: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: 12,
  },
}));

export default function UserList({ data: inData, hideTitle = false }) {
  const { t } = useTranslation();
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isInit, setIsInit] = useState(false);

  const handleFilter = (key) => (values) => {
    const newFilters = {
      ...filters,
      [key]: values,
    };
    setFilters(newFilters);

    history.push({
      search: `?${Object.keys(newFilters)
        .map((key)=>`${key}=${key === 'text' ? newFilters[key] : newFilters[key].join(',')}`)
        .join('&')}`,
    });
  };

  useEffect(() => {
    const filtered = users.filter((user) => {
      let shouldDisplay = true;
      Object.keys(filters).forEach((key) => {
        if (key === 'text') {
          shouldDisplay = [
            user.username, user.name, user.selfIntroduction,
            user.tagsString, user.needsString,
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
      const data = inData || (await asyncListAll( /* GraphQL */ `
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
              tags {
                items {
                  tag {
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
      `));
      setUsers(data.map((user) => {
        user.tagsString = user.tags.items.map((item) => item.tag.label).join(', ');
        user.needsString = user.needs.items.map((item) => item.need.label).join(', ');
        return user;
      }));

      const filters = querystring.parse(window.location.search);
      Object.keys(filters).forEach((key) => {
        if (key !== 'text') {
          filters[key] = filters[key].split(',');
        }
      });
      console.log(filters);
      setFilters(filters);

      setIsInit(true);
      setIsLoading(false);
    })();
  }, [inData]);

  if (!isInit) {
    return <Loading fullScreen={false} />;
  }

  return (
    <StyledContainer className={classes.container} maxWidth={false}>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
              {t('userList_users')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <DataJoinEditorInput
              title={t('userList_searchByTags')}
              mode={'user-tag'}
              joinData={[]}
              defaultValues={filters.tags || []}
              onChange={handleFilter('tags')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              freeSolo={false}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <DataJoinEditorInput
              title={t('userList_searchByNeeds')}
              mode={'user-need'}
              joinData={[]}
              defaultValues={filters.needs || []}
              onChange={handleFilter('needs')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              freeSolo={false}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="userList_searchByText"
              label={t('userList_searchByText')}
              variant="outlined"
              value={filters.text}
              onChange={(e)=>{
                handleFilter('text')(e.target.value.toLowerCase());
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
      {/* TODO: pagination */}
      <Grid container spacing={2}>
        {filteredUsers.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
            <UserCard user={item} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

UserList.propTypes = {
  data: PropTypes.array,
  hideTitle: PropTypes.bool,
};
