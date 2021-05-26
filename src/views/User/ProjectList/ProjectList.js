import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

import { asyncListAll } from 'utils/graph';
import { listProjects } from 'graphql/queries';
import ProjectCard from 'components/ProjectCard';

export default function UserProjectList() {
  const { t } = useTranslation();

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await asyncListAll(listProjects);
      setProjects(data);
    })();
  }, []);

  return (
    <Container maxWidth={false}>
      <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
        {t('projectList_projects')}
      </Typography>
      <Grid container spacing={2}>
        {projects.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

UserProjectList.propTypes = {};
