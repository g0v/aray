import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

import { request } from 'utils/graph';
import { getUser } from 'graphql/queries';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     flex: 1,
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
// }));

export default function User({ id: inId, computedMatch }) {
  // const classes = useStyles();

  const [id, setId] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    if (inId) {
      setId(inId);
    } else
    if (computedMatch) {
      const { params: { id } } = computedMatch;
      const username = localStorage.getItem('app:username');
      setId(id || username);
    }
  }, [inId, computedMatch]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data: { getUser: data } } = await request(getUser, { username: id });
      console.log('data', data);
      setUser(data);
    })();
  }, [id]);

  if (!user) return null;

  return (
    <Grid container spacing={1} style={{ padding: 16 }}>
      <Grid item xs={12} align="center">
        {user.name}
      </Grid>
      <Grid item xs={12} align="center">
        關鍵字：{user.keywords.items.length}
      </Grid>
      <Grid item xs={12} align="center">
        參與專案：{user.projects.items.length}
      </Grid>

      {/* <ProjectEditButton mode={'edit'} item={project} /> */}
    </Grid>
  );
}

User.propTypes = {
  id: PropTypes.string,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
