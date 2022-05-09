import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { Link as RouteLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
// import CardActions from '@mui/material/CardActions';
// import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';
import moment from 'moment';

import { request } from 'utils/graph';
import { getProject } from 'graphql/queries';
import CategoryChip from 'components/CategoryChip';
import NeedChip from 'components/NeedChip';
import TagChip from 'components/TagChip';
import GovernmentAgencyChip from 'components/GovernmentAgencyChip';
import ProjectAvatar from 'components/ProjectAvatar';

const classes = {
  root: `ProjectCard-root`,
  media: `ProjectCard-media`,
};

const StyledCard = styled(Card)({
  [`&.${classes.root}`]: {
    // maxWidth: 345,
    height: '100%',
  },
  [`& .${classes.media}`]: {
    height: 140,
  },
});

export default function ProjectCard({
  project: inProject,
  projectId: inProjectId,
  userProject,
  variant = '',
  hideSummary,
}) {
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
    <StyledCard className={classes.root} variant={variant}>
      <Link
        to={`/project/${project.id}`}
        component={RouteLink}
        style={{
          textDecoration: 'none',
          height: '100%',
        }}
      >
        <CardActionArea style={{ height: '100%' }}>
          {/* <CardMedia
            className={classes.media}
            image={`https://avatars.dicebear.com/api/jdenticon/${project.id}.svg`}
            title="Project"
          /> */}
          <CardContent style={{ height: '100%' }}>
            <Box align="center" justify="center" mb={2}>
              <ProjectAvatar projectId={project.id} size={100} />
            </Box>
            <Typography gutterBottom variant="h5" component="h2">
              {project.name}
            </Typography>
            {!hideSummary &&
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {project.summary || ''}
            </Typography>}
            {!hideSummary &&
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              {/* <UserChip username={project.owner}/> */}
              {t('projectCard_createdAt')} {moment(project.createdAt).format('YYYY-MM-DD')}
            </Typography>}
            <div>
              {project.categorys && project.categorys.items.map((item, index)=>(
                <CategoryChip key={index} data={item.category} size="small" />
              ))}
            </div>
            <div>
              {project.governmentAgencies && project.governmentAgencies.items.map((item, index)=>(
                <GovernmentAgencyChip key={index} data={item.governmentAgency} size="small" />
              ))}
            </div>
            <div>
              {project.tags && project.tags.items.map((item, index)=>(
                <TagChip key={index} data={item.tag} size="small" />
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
    </StyledCard>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
  projectId: PropTypes.string,
  userProject: PropTypes.object,
  variant: PropTypes.string,
  hideSummary: PropTypes.bool,
};
