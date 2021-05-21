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

import { request } from 'utils/graph';
import { getProject } from 'graphql/queries';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard({ project: inProject, projectId: inProjectId }) {
  const classes = useStyles();

  const [project, setProject] = useState();

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
            <Typography variant="body2" color="textSecondary" component="p">
              {project.summary || '無'}
            </Typography>
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
};
