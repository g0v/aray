import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';

import ProjectChip from 'components/ProjectChip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContributionList({ data, max = 10 }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {data.filter((x, index) => index < max).map((item, index)=>(
        <ListItem key={index}>
          <ListItemText
            primary={<Typography variant="body1" color="textPrimary" gutterBottom>
              {item.summary || ''}
            </Typography>}
            secondary={<React.Fragment>
              <Typography variant="body2" color="textSecondary">
                {item.description || ''}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                <ProjectChip projectId={item.project.id} projectName={item.project.name} /> @ {moment(item.createdAt).format('YYYY-MM-DD')}
              </Typography>
            </React.Fragment>}
          />
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
