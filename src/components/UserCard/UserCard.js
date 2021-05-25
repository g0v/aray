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

export default function UserCard({ user: inUser, username: inUsername }) {
  const classes = useStyles();

  const [user, setUser] = useState();

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
            image="https://scontent-sjc3-1.xx.fbcdn.net/v/t31.18172-8/680443_631365800238043_1735233757_o.png?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=HVWkuIk1_z8AX-PAdYo&_nc_ht=scontent-sjc3-1.xx&oh=489ad99377c6b63ea1571fd9e8ebf0f9&oe=60C9286B" // eslint-disable-line
            title="avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name} ({user.username})
            </Typography>
            {user.keywords && user.keywords.items.map((item, index)=>(
              <KeywordChip key={index} data={item.keyword} size="small" />
            ))}
            {user.needs && user.needs.items.map((item, index)=>(
              <NeedChip key={index} data={item.need} size="small" />
            ))}
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
};
