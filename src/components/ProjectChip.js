import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { Link as RouteLink } from 'react-router-dom';

import ProjectAvatar from 'components/ProjectAvatar';
import Colors from 'constants/Colors';

const classes = {
  root: `ProjectChip-root`,
};

const StyledLink = styled(Link)({
  [`& .${classes.root}`]: {
    backgroundColor: Colors.background.light2,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 24,
    margin: 2,
  },
});

const StyleChip = Chip;

export default function ProjectChip({
  projectId,
  projectName,
}) {
  const avatar = <ProjectAvatar
    projectId={projectId}
    name={projectName}
    size={24}
    variant={'square'}
  />;

  return (
    <StyledLink
      to={`/project/${projectId}`}
      component={RouteLink}
      style={{
        textDecoration: 'none',
      }}
    >
      <StyleChip
        avatar={avatar}
        label={projectName}
        clickable
        color="default"
        classes={{
          root: classes.root,
        }} />
    </StyledLink>
  );
}

ProjectChip.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
