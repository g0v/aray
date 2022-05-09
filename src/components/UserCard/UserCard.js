import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Link from '@mui/material/Link';
import { Link as RouteLink } from 'react-router-dom';
import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';

import { request } from 'utils/graph';
import { getUser } from 'graphql/queries';
import TagChip from 'components/TagChip';
import NeedChip from 'components/NeedChip';
import UserAvatar from 'components/UserAvatar';

const classes = {
  root: `UserCard-root`,
  media: `UserCard-media`,
  avatarContainer: `UserCard-avatarContainer`,
};

const StyledLink = styled(Link)(({ theme }) => ({
  [`& .${classes.root}`]: {
    // maxWidth: 345,
    // margin: theme.spacing(1),
    'height': '100%',
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.light, 0.1),
    },
  },

  [`& .${classes.media}`]: {
    height: 140,
  },

  [`& .${classes.avatarContainer}`]: {
    textAlign: 'center',
  },
}));

export default function UserCard({
  user: inUser,
  username: inUsername,
  userProject,
  variant,
}) {
  const { t } = useTranslation();

  const [user, setUser] = useState();

  useEffect(() => {
    if (!userProject) return;
    (async () => {
      setUser(userProject.user);
    })();
  }, [userProject]);

  useEffect(() => {
    if (!inUser) return;
    (async () => {
      setUser(inUser);
    })();
  }, [inUser]);

  useEffect(() => {
    if (!inUsername) return;
    (async () => {
      const { data: { getUser: data } } = await request(getUser, { id: inUsername });
      setUser(data || {});
    })();
  }, [inUsername]);

  if (!user) return null;

  return (
    <StyledLink
      to={`/user/${user.username}`}
      component={RouteLink}
      style={{
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <Card className={classes.root} variant={variant}>
        <CardHeader
          avatar={
            <UserAvatar username={user.username} size={50} />
          }
          title={user.name}
          subheader={user.username}
        />
        <CardContent style={{ paddingTop: 0 }}>
          <div>
            {user.tags && user.tags.items.map((item, index)=>(
              <TagChip key={index} data={item.tag} size="small" />
            ))}
          </div>
          <div>
            {user.needs && user.needs.items.map((item, index)=>(
              <NeedChip key={index} data={item.need} size="small" />
            ))}
          </div>
          {userProject &&
          <Typography variant="body2" color="textSecondary" component="p">
            {t('userCard_completedTasks')}:&nbsp;
            <NumberFormat
              value={userProject.completedTasks}
              displayType="text"
              thousandSeparator={true}
            />
          </Typography>}
          {userProject &&
          <Typography variant="body2" color="textSecondary" component="p">
            {t('userCard_completedHours')}:&nbsp;
            <NumberFormat
              value={userProject.completedHours}
              displayType="text"
              thousandSeparator={true}
            />
          </Typography>}
        </CardContent>
      </Card>
    </StyledLink>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  userProject: PropTypes.object,
  variant: PropTypes.string,
};
