import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import { Link as RouteLink } from 'react-router-dom';

import UserAvatar from 'components/UserAvatar';
import Colors from 'constants/Colors';

const classes = {
  root: `UserChip-root`,
};

const StyledLink = styled(Link)({
  [`& .${classes.root}`]: {
    backgroundColor: Colors.background.light2,
    // borderRadius: 0,
    paddingTop: 0,
    paddingBottom: 0,
    height: 24,
    margin: 2,
  },
});

const StyleChip = Chip;

export default function UserChip({
  username,
}) {
  const avatar = <UserAvatar
    username={username}
    name={username}
    // size={24}
    // variant={'square'}
  />;

  return (
    <StyledLink
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
        classes={{
          root: classes.root,
        }} />
    </StyledLink>
  );
}

UserChip.propTypes = {
  username: PropTypes.string.isRequired,
};
