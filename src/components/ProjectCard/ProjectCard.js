import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';

import { request } from 'utils/graph';
import { getProject } from 'graphql/queries';
import KeywordChip from 'components/KeywordChip';
import NeedChip from 'components/NeedChip';
import TagChip from 'components/TagChip';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({
  project: inProject,
  projectId: inProjectId,
  userProject,
}) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [project, setProject] = useState();

  useEffect(() => {
    if (!userProject) return;
    setProject(userProject.project);
  }, [userProject]);

  useEffect(() => {
    if (!inProject) return;
    (async () => {
      setProject(inProject);
    })();
  }, [inProject]);

  useEffect(() => {
    if (!inProjectId) return;
    (async () => {
      const { data: { getProject: data } } = await request(getProject, { id: inProjectId });
      setProject(data || {});
    })();
  }, [inProjectId]);

  if (!project) return null;

  return (
    <Card className={classes.root}>
      <Link
        to={`/project/${project.id}`}
        component={RouteLink}
        style={{
          textDecoration: 'none',
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://g0v.tw/assets/img/g0v-hero.jpg"
            title="Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p" gutterBottom>
              {project.summary || '無'}
            </Typography>
            <div>
              {project.tags && project.tags.items.map((item, index)=>(
                <TagChip key={index} data={item.tag} size="small" />
              ))}
            </div>
            <div>
              {project.keywords && project.keywords.items.map((item, index)=>(
                <KeywordChip key={index} data={item.keyword} size="small" />
              ))}
            </div>
            <div>
              {project.needs && project.needs.items.map((item, index)=>(
                <NeedChip key={index} data={item.need} size="small" />
              ))}
            </div>
            {userProject &&
            <Typography variant="body2" color="textSecondary" component="p">
              {t('projectCard_completedTasks')}:&nbsp;
              <NumberFormat
                value={userProject.completedTasks}
                displayType="text"
                thousandSeparator={true}
              />
            </Typography>}
            {userProject &&
            <Typography variant="body2" color="textSecondary" component="p">
              {t('projectCard_completedHours')}:&nbsp;
              <NumberFormat
                value={userProject.completedHours}
                displayType="text"
                thousandSeparator={true}
              />
            </Typography>}
          </CardContent>
        </CardActionArea>
      </Link>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  projectId: PropTypes.string,
  userProject: PropTypes.object,
};
