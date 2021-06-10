import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import { asyncListAll } from 'utils/graph';
import { listProjects } from './ProjectListQueries';
import ProjectCard from 'components/ProjectCard';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';
import Loading from 'components/Loading';

export default function UserProjectList() {
  const { t } = useTranslation();
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isInit, setIsInit] = useState(false);

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
            project.tagsString, project.keywordsString, project.needsString,
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
        project.keywordsString = project.keywords.items.map((item) => item.keyword.label).join(', ');
        project.needsString = project.needs.items.map((item) => item.need.label).join(', ');
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
    <Container maxWidth={false}>
      <Card style={{ padding: 16, marginTop: 16, marginBottom: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center" style={{ marginTop: 16 }}>
              {t('projectList_projects')}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <DataJoinEditorInput
              title={t('projectList_searchByTags')}
              mode={'project-tag'}
              joinData={[]}
              defaultValues={filters.tags || []}
              onChange={handleFilter('tags')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DataJoinEditorInput
              title={t('projectList_searchByKeywords')}
              mode={'project-keyword'}
              joinData={[]}
              defaultValues={filters.keywords || []}
              onChange={handleFilter('keywords')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DataJoinEditorInput
              title={t('projectList_searchByNeeds')}
              mode={'project-need'}
              defaultValues={filters.needs || []}
              onChange={handleFilter('needs')}
              onUpdateOptions={()=>{}}
              disabled={isLoading}
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
      <Grid container spacing={2}>
        {filteredProjects.map((item, index)=>(
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

UserProjectList.propTypes = {};
