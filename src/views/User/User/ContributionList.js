import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import moment from 'moment';

import ProjectChip from 'components/ProjectChip';

const classes = {
  root: `ContributionList-root`,
};

const StyledList = styled(List)(({ theme }) => ({
  [`&.${classes.root}`]: {
    width: '100%',
    maxWidth: '100%',
    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function ContributionList({ data, max = 10 }) {
  return (
    <StyledList className={classes.root}>
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
          <ListItemText primary={`+ ${item.hours}`} style={{ maxWidth: 60, textAlign: 'right' }}/>
        </ListItem>
      ))}
    </StyledList>
  );
}


ContributionList.propTypes = {
  data: PropTypes.array.isRequired,
  max: PropTypes.number,
};
