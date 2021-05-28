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
import { getUser } from 'graphql/queries';
import KeywordChip from 'components/KeywordChip';
import NeedChip from 'components/NeedChip';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
}));

export default function UserCard({
  user: inUser,
  username: inUsername,
  userProject,
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
    <Card className={classes.root}>
      <Link
        to={`/user/${user.username}`}
        component={RouteLink}
        style={{
          textDecoration: 'none',
        }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://avatars.dicebear.com/api/bottts/${user.username}.svg`}
            title="avatar"
          />
          <CardContent>
            <Typography variant="h5" component="h2" color="textPrimary">
              {user.name}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary" gutterBottom>
              {user.username}
            </Typography>
            {user.keywords && user.keywords.items.map((item, index)=>(
              <KeywordChip key={index} data={item.keyword} size="small" />
            ))}
            {user.needs && user.needs.items.map((item, index)=>(
              <NeedChip key={index} data={item.need} size="small" />
            ))}
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

UserCard.propTypes = {
  user: PropTypes.object,
  username: PropTypes.string,
  userProject: PropTypes.object,
};
