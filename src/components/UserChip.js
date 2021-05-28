import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import UserAvatar from 'components/UserAvatar';
import Colors from 'constants/Colors';

const StyleChip = withStyles({
  root: {
    backgroundColor: Colors.background.light,
    borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 24,
  },
})(Chip);

export default function UserChip({
  username,
}) {
  const avatar = <UserAvatar
    username={username}
    name={username}
    size={24}
    variant={'square'}
  />;

  return (
    <Link
      to={`/user/${username}`}
      component={RouteLink}
      style={{
        textDecoration: 'none',
      }}
    >
      <StyleChip
        avatar={avatar}
        label={username}
        clickable
        color="default"
      />
    </Link>
  );
}

UserChip.propTypes = {
  username: PropTypes.string.isRequired,
};
