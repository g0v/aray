import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ProjectAvatar from 'components/ProjectAvatar';
import Colors from 'constants/Colors';

const StyleChip = withStyles({
  root: {
    backgroundColor: Colors.background.light2,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 24,
  },
})(Chip);

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
    <Link
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
      />
    </Link>
  );
}

ProjectChip.propTypes = {
  projectId: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
};
