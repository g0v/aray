import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContributionList({ data, max = 10 }) {
  const classes = useStyles();

  console.log('data', data);

  return (
    <List className={classes.root}>
      {data.filter((x, index) => index < max).map((item, index)=>(
        <ListItem key={index}>
          <ListItemText
            primary={item.summary}
            secondary={`${moment(item.createdAt).format('YYYY-MM-DD')} ${item.project ? item.project.name : ''}`} />
          <ListItemText primary={`+ ${item.hours}`} />
        </ListItem>
      ))}
    </List>
  );
}


ContributionList.propTypes = {
  data: PropTypes.array.isRequired,
  max: PropTypes.number,
};
