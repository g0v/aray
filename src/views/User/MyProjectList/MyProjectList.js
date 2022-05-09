import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import { request } from 'utils/graph';
import { getUser } from 'graphql/queries';
import ProjectCard from 'components/ProjectCard';
import ProjectEditButton from 'forms/ProjectForm/ProjectEditButton';

export default function MyProjectList() {
  const { t } = useTranslation();

  const [ownProjects, setOwnProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());

  // const handleCreateProject = async () => {
  //   console.log('create project');
  // };

  useEffect(() => {
    (async () => {
      const username = localStorage.getItem('app:username');
      const { data: { getUser: userData } } = await request(getUser, { username });
      console.log(userData);
      const projects = userData.projects.items;
      setOwnProjects(projects.filter(({ role }) => role === 'manager'));
      setOtherProjects(projects.filter(({ role }) => role === 'contributor'));
    })();
  }, [lastUpdatedAt]);

  // console.log({ ownProjects, otherProjects });

  return (
    <Container>
      <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
        {t('myProjectList_myProjects')}
      </Typography>
      <Grid container spacing={2}>
        {ownProjects.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProjectCard project={item.project} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
        {t('myProjectList_otherProjects')}
      </Typography>
      <Grid container spacing={2}>
        {otherProjects.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProjectCard project={item.project} />
          </Grid>
        ))}
      </Grid>
      <ProjectEditButton
        mode={'add'}
        type="floating-button"
        onUpdate={() => setLastUpdatedAt(Date.now())}
      />
    </Container>
  );
}

MyProjectList.propTypes = {};
