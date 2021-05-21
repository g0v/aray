import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContributionList({ data, max = 10 }) {
  const classes = useStyles();

  console.log('ContributionList data', data);

  return (
    <List className={classes.root}>
      {data.filter((x, index) => index < max).map((item, index)=>(
        <ListItem key={index}>
          {/* TODO: display project name */}
          <ListItemText primary={item.summary} secondary={item.createdAt} />
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
