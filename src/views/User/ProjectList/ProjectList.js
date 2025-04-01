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

import { fetchPaginatedData } from 'utils/graph';
import { listProjects } from './ProjectListQueries';
import ProjectCard from 'components/ProjectCard';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';
import Loading from 'components/Loading';
import { sortBy } from 'utils/sorting';

export default function UserProjectList() {
  const { t } = useTranslation();
  const history = useHistory();

  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [sortedAndMappedProjects, setSortedAndMappedProjects] = useState([]);
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
        .map((key) => `${key}=${key === 'text' ? newFilters[key] : newFilters[key].join(',')}`)
        .join('&')}`,
    });
  };

  useEffect(() => {
    if (projects.length > 0) {
      const filtered = projects.filter((project) => {
        const tags = project.tags.items.map((item) => item.tag.label);
        const categorys = project.categorys.items.map((item) => item.category.label);
        const needs = project.needs.items.map((item) => item.need.label);
        const governmentAgencies = project.governmentAgencies.items.map((item) => item.governmentAgency.label);

        return (
          (filters.text ? project.name.toLowerCase().includes(filters.text.toLowerCase()) : true) &&
          (filters.tags ? filters.tags.every((tag) => tags.includes(tag)) : true) &&
          (filters.categorys ? filters.categorys.every((category) => categorys.includes(category)) : true) &&
          (filters.needs ? filters.needs.every((need) => needs.includes(need)) : true) &&
          (filters.governmentAgencies ? filters.governmentAgencies.every((agency) => governmentAgencies.includes(agency)) : true)
        );
      });
      setFilteredProjects(filtered);
    }
  }, [filters]);

  useEffect(() => {
    if (projects.length > 0) {
      const sortedProjects = [...projects].sort(sortBy('updatedAt', true));
      const mappedProjects = sortedProjects.map((project) => {
        project.tagsString = project.tags.items.map((item) => item.tag.label).join(', ');
        project.categorysString = project.categorys.items.map((item) => item.category.label).join(', ');
        project.needsString = project.needs.items.map((item) => item.need.label).join(', ');
        project.governmentAgencyString = project.governmentAgencies.items.map((item) => item.governmentAgency.label).join(', ');
        return project;
      });
      setSortedAndMappedProjects(mappedProjects);
      setFilteredProjects(mappedProjects);
    }
  }, [projects]);

  const fetchListProjects = async () => {
    // TODO: indexing and pagination
    // const data = await asyncListAll(listProjects, { limit: 100 });
    fetchPaginatedData({ query: listProjects, limit: 100, setState: setProjects, setIsLoading: setIsLoading });
    // setProjects(data.sort(sortBy('updatedAt', true)).map((project) => {
    //   project.tagsString = project.tags.items.map((item) => item.tag.label).join(', ');
    //   project.categorysString = project.categorys.items.map((item) => item.category.label).join(', ');
    //   project.needsString = project.needs.items.map((item) => item.need.label).join(', ');
    //   project.governmentAgencyString = project.governmentAgencies.items.map((item) => item.governmentAgency.label).join(', ');
    //   return project;
    // }));

    const filters = querystring.parse(window.location.search);
    Object.keys(filters).forEach((key) => {
      if (key !== 'text') {
        filters[key] = filters[key].split(',');
      }
    });
    console.log(filters);
    setFilters(filters);
    setIsInit(true);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchListProjects();
    setIsLoading(false);
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
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title={t('projectList_searchByCategorys')}
              mode={'project-category'}
              joinData={[]}
              defaultValues={filters.categorys || []}
              onChange={handleFilter('categorys')}
              onUpdateOptions={() => { }}
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
              onUpdateOptions={() => { }}
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
              onUpdateOptions={() => { }}
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
              onUpdateOptions={() => { }}
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
              onChange={(e) => {
                handleFilter('text')(e.target.value.toLowerCase());
              }}
              fullWidth
            />
          </Grid>
        </Grid>
      </Card>
      <Grid container spacing={2}>
        {filteredProjects.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} lg={2} key={index}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

UserProjectList.propTypes = {};
