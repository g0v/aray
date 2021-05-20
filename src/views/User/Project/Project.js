import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';

import { request } from 'utils/graph';
import { getProject } from 'graphql/queries';
import ProjectEditButton from 'forms/ProjectForm/ProjectEditButton';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     flex: 1,
//     paddingTop: theme.spacing(2),
//     paddingBottom: theme.spacing(2),
//   },
// }));

export default function Project({ id: inId, computedMatch }) {
  // const classes = useStyles();

  const [id, setId] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    if (inId) {
      setId(inId);
    } else
    if (computedMatch) {
      const { params: { id } } = computedMatch;
      setId(id);
    }
  }, [inId, computedMatch]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data: { getProject: data } } = await request(getProject, { id });
      setProject(data);
    })();
  }, [id]);

  if (!project) return null;

  return (
    <Grid container spacing={1} style={{ padding: 16 }}>
      <Grid item xs={12} align="center">
        {project.name}
      </Grid>
      <Grid item xs={12} align="center">
        {project.summary || ''}
      </Grid>
      <Grid item xs={12} align="center">
        {project.description || ''}
      </Grid>

      <ProjectEditButton mode={'edit'} item={project} />
    </Grid>
  );
}

Project.propTypes = {
  id: PropTypes.string,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
