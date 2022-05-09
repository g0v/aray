import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import { asyncListAll } from 'utils/graph';
import { listProjects } from './ProjectListQueries';
import ProjectCard from 'components/ProjectCard';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';
import Loading from 'components/Loading';

const classes = {
  container: `ProjectList-container`,
  card: `ProjectList-card`,
  listItem: `ProjectList-listItem`,
  listItemText: `ProjectList-listItemText`,
  header: `ProjectList-header`,
  masonryContainer: `ProjectList-masonryContainer`,
  ProjectCard: `ProjectList-ProjectCard`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.container}`]: {
    padding: theme.spacing(3),
  },

  [`& .${classes.card}`]: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },

  [`& .${classes.listItem}`]: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },

  [`& .${classes.listItemText}`]: {
    marginLeft: theme.spacing(1),
  },

  [`& .${classes.header}`]: {
    marginTop: theme.spacing(2),
  },

  [`& .${classes.masonryContainer}`]: {
    margin: theme.spacing(2),
  },

  [`& .${classes.ProjectCard}`]: {
    paddingTop: theme.spacing(2),
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function UserProjectList() {
  const { t } = useTranslation();
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isInit, setIsInit] = useState(false);
  const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

  const handleFilter = (key) => (values) => {
    // console.log(key, values);
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
    const filtered = projects.filter((project) => {
      let shouldDisplay = true;
      Object.keys(filters).forEach((key) => {
        if (key === 'text') {
          shouldDisplay = [
            project.name, project.altName, project.summary, project.description,
            project.tagsString, project.categorysString, project.needsString, project.governmentAgencyString,
          ].some((value) => {
            return value ? value.toLowerCase().includes(filters[key]) : false;
          });
          return;
        }
        const targetValues = filters[key];
        if (targetValues.length === 0) {
          return;
        }
        const result = project[key].items.some((item) => {
          return targetValues.includes(item[Object.keys(item)[0]].label);
        });
        if (!result) {
          shouldDisplay = false;
        }
      });

      return shouldDisplay;
    });

    setFilteredProjects(filtered);
  }, [filters, projects, history]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      // TODO: indexing and pagination
      const data = await asyncListAll(listProjects);
      setProjects(data.map((project) => {
        project.tagsString = project.tags.items.map((item) => item.tag.label).join(', ');
        project.categorysString = project.categorys.items.map((item) => item.category.label).join(', ');
        project.needsString = project.needs.items.map((item) => item.need.label).join(', ');
        project.governmentAgencyString = project.governmentAgencies.items.map((item) => item.governmentAgency.label).join(', ');
        return project;
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
  }, []);

  if (!isInit) {
    return <Loading fullScreen={false} />;
  }

  return (
    <StyledContainer className={classes.container} maxWidth={false}>
      <Card className={classes.card}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
              {t('projectList_projects')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title={t('projectList_searchByCategorys')}
              mode={'project-category'}
              joinData={[]}
              defaultValues={filters.categorys || []}
              onChange={handleFilter('categorys')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              showHelperText={false}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title={t('projectList_searchByGovernmentAgencies')}
              mode={'project-governmentAgency'}
              defaultValues={filters.governmentAgencies || []}
              onChange={handleFilter('governmentAgencies')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              showHelperText={false}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title={t('projectList_searchByTags')}
              mode={'project-tag'}
              joinData={[]}
              defaultValues={filters.tags || []}
              onChange={handleFilter('tags')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              showHelperText={false}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title={t('projectList_searchByNeeds')}
              mode={'project-need'}
              defaultValues={filters.needs || []}
              onChange={handleFilter('needs')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
              showHelperText={false}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="projectList_searchByText"
              label={t('projectList_searchByText')}
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
      <Box>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
              {index + 1}
            </Item>
          ))}
        </Masonry>
      </Box>
      <Grid container spacing={2}>
        {filteredProjects.map((item, index)=>(
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

UserProjectList.propTypes = {};
