import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import { request } from 'utils/graph';
import { getProject } from 'graphql/queries';
import ProjectEditButton from 'forms/ProjectForm/ProjectEditButton';

import UserCard from 'components/UserCard';
import TagChip from 'components/TagChip';
import CategoryChip from 'components/CategoryChip';
import NeedChip from 'components/NeedChip';
import DataJoinEditor from 'components/DataJoinEditor';
import Note from 'components/Note';
import RichText from 'components/RichText';
import VisitButton from 'components/VisitButton';
import ProjectTasks from './ProjectTasks';
import ProjectContributions from './ProjectContributions';
import UserChip from 'components/UserChip';
import ProjectAvatar from 'components/ProjectAvatar';
import ProjectOwnerEditor from 'components/ProjectOwnerEditor';
import ProjectManagerEditor from 'components/ProjectManagerEditor';
import Loading from 'components/Loading';
import EventCalendar from 'components/EventCalendar';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },
  listItemText: {
    marginLeft: theme.spacing(1),
  },
  header: {
    marginTop: theme.spacing(2),
  },
  chipContainer: {
    paddingTop: theme.spacing(2),
  },
  userChipContainer: {
    paddingBottom: theme.spacing(0),
  },
}));

export default function Project({ id: inId, computedMatch, match }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  const [id, setId] = useState();
  const [project, setProject] = useState();
  const [categorys, setCategorys] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [tags, setTags] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());

  const handleTabChange = (newTabIndex) => {
    history.push({
      search: `?tab=${newTabIndex}`,
    });

    setTabIndex(newTabIndex);
  };

  const tabs = [
    {
      label: t('project_main'),
      component: () => <Grid container>
        <Grid item xs={12}>
          <RichText data={project.description} />
        </Grid>
      </Grid>,
    },
    {
      label: t('project_events'),
      component: () => <Grid container>
        <Grid item xs={12}>
          <EventCalendar projectId={project.id} />
        </Grid>
      </Grid>,
    },
    {
      label: t('project_contributors'),
      component: () => <React.Fragment>
        {project.contributors.items.map((item, index)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <UserCard userProject={item} variant="outlined" />
          </Grid>
        ))}
      </React.Fragment>,
    },
    {
      label: t('project_contributions'),
      component: () => <ProjectContributions project={project} />,
    },
    {
      label: t('project_tasks'),
      component: () => <ProjectTasks project={project} />,
    },
    // {
    //   label: t('project_pastProposals'),
    //   component: <React.Fragment>
    //   </React.Fragment>,
    //   disabled: true,
    // },
  ];

  useEffect(() => {
    if (inId) {
      setId(inId);
    } else
    if (computedMatch || match) {
      const { params: { id } } = computedMatch || match;
      setId(id);
    }
  }, [inId, computedMatch, match]);

  useEffect(() => {
    if (!id) return;

    (async () => {
      const { data: { getProject: data } } = await request(getProject, { id });
      const { tab } = querystring.parse(window.location.search);

      setProject(data);
      setCategorys(data.categorys.items.map(({ category }) => category));
      setNeeds(data.needs.items.map(({ need }) => need));
      setTags(data.tags.items.map(({ tag }) => tag));
      setTabIndex(parseInt(tab || 0));

      const username = localStorage.getItem('app:username');
      const canEdit = [data.owner, ...data.managers].includes(username);
      setCanEdit(canEdit);
    })();
  }, [id, lastUpdatedAt]);

  if (!project) {
    return <Loading fullScreen={false} />;
  }

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3} container>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={12} align="center">
                <ProjectAvatar
                  projectId={project.id}
                  name={project.name}
                  size={150}
                  showEditor={true}
                  canEdit={canEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                  {project.name}
                </Typography>
                {/* <Typography variant="body1" gutterBottom>
                  {project.summary || ''}
                </Typography> */}
                <Note data={project.summary} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_owner')}
                  {canEdit &&
                  <ProjectOwnerEditor
                    project={project}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                <div className={classes.userChipContainer}>
                  <UserChip username={project.owner}/>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_managers')}
                  {canEdit &&
                  <ProjectManagerEditor
                    project={project}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                <div className={classes.userChipContainer}>
                  {project.managers.map((username, index)=>(
                    <UserChip key={index} username={username}/>
                  ))}
                </div>
              </Grid>
              {(project.slackChannel || project.slackChannelUrl) &&
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_slackChannel')}
                </Typography>
                <VisitButton
                  title={`#${(project.slackChannel || '專案頻道').replace('#', '')}`}
                  url={project.slackChannelUrl || 'https://g0v-tw.slack.com/'}
                  variant={'text'}
                  color={'secondary'}
                  style={{ padding: 0, minWidth: 0, textTransform: 'none' }}
                />
              </Grid>}
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_links')}
                </Typography>
                {project.links.map((link, index)=>(
                  <div key={index} style={{ margin: 1, display: 'block' }}>
                    <VisitButton
                      title={link.name}
                      url={link.url}
                      variant={'text'}
                      color={'secondary'}
                      style={{ padding: 0, minWidth: 0, textTransform: 'none' }}
                    />
                  </div>
                ))}
              </Grid>
              {canEdit &&
              <Grid item xs={12} className={classes.chipContainer}>
                <ProjectEditButton
                  mode={'edit'}
                  item={project}
                  onUpdate={() => setLastUpdatedAt(Date.now())}
                />
              </Grid>}
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_categorys')}
                  {canEdit &&
                  <DataJoinEditor
                    title={t('project_categorys')}
                    mode={'project-category'}
                    projectId={project.id}
                    joinData={project.categorys.items}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                    showHelperText={false}
                  />}
                </Typography>
                {categorys.map((item, index)=>(
                  <CategoryChip key={index} data={item} target="project" />
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_tags')}
                  {canEdit &&
                  <DataJoinEditor
                    title={t('project_tags')}
                    mode={'project-tag'}
                    projectId={project.id}
                    joinData={project.tags.items}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                {tags.map((item, index)=>(
                  <TagChip key={index} data={item} target="project" />
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('project_needs')}
                  {canEdit &&
                  <DataJoinEditor
                    title={t('project_needs')}
                    mode={'project-need'}
                    projectId={project.id}
                    joinData={project.needs.items}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                {needs.map((item, index)=>(
                  <NeedChip key={index} data={item} target="project" />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Grid item xs={12} style={{ height: 64 }}>
              <Tabs
                value={tabIndex}
                indicatorColor="primary"
                textColor="primary"
                onChange={(e, newValue) => handleTabChange(newValue)}
                aria-label="Project Tabs"
                // centered
              >
                {tabs.map(({ label, disabled }, index)=>(
                  <Tab key={index} label={label} disabled={disabled} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={12} container alignItems="flex-start" justify="flex-start" spacing={2}>
              {tabs.filter((x, index) => index === tabIndex).map((item, index)=>(
                <item.component key={index} />
              ))}
            </Grid>
            <div style={{ flex: 1 }} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

Project.propTypes = {
  id: PropTypes.string,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
