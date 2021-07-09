import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import NumberFormat from 'react-number-format';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { request } from 'utils/graph';
import { getUser } from 'graphql/queries';
import TagChip from 'components/TagChip';
import NeedChip from 'components/NeedChip';
import UserAvatar from 'components/UserAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    // margin: theme.spacing(1),
    'height': '100%',
    '&:hover': {
      backgroundColor: fade(theme.palette.secondary.light, 0.1),
    },
  },
  media: {
    height: 140,
  },
  avatarContainer: {
    textAlign: 'center',
  },
}));

export default function UserCard({
  user: inUser,
  username: inUsername,
  userProject,
  variant,
}) {
  const classes = useStyles();
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
    <Link
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
    </Link>
  );
}

UserCard.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  userProject: PropTypes.object,
  variant: PropTypes.string,
};
