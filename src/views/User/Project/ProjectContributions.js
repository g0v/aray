import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import ContributionEditButton from 'forms/ContributionForm/ContributionEditButton';
import { request } from 'utils/graph';
import { getContributionsByProjectIdByCreatedAt } from 'graphql/queries';
import UserChip from 'components/UserChip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  hoursContainer: {
    paddingRight: theme.spacing(2),
  },
}));

const ListItemWithWiderSecondaryAction = withStyles({
  secondaryAction: {
    paddingRight: 48,
  },
})(ListItem);

export default function ProjectContributions({ project }) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [data, setData] = useState([]);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());
  const [canEdit, setCanEdit] = useState(false);

  const handleRefresh = () => {
    setLastUpdatedAt(Date.now());
  };

  useEffect(() => {
    if (!project) return;
    (async () => {
      const {
        data: { getContributionsByProjectIdByCreatedAt: { items: results } },
      } = await request(getContributionsByProjectIdByCreatedAt, {
        projectId: project.id,
        sortDirection: 'DESC',
        limit: 10,
      });
      setData(results);
      const username = localStorage.getItem('app:username');
      const canEdit = [project.owner, ...project.managers].includes(username);
      setCanEdit(canEdit);
    })();
  }, [project, lastUpdatedAt]);

  return (
    <React.Fragment>
      {canEdit &&
      <ContributionEditButton
        mode="add"
        type="floating-button"
        item={{ projectId: project.id }}
        onUpdate={handleRefresh}
      />}
      {/* TODO: pagination */}
      <List className={classes.root}>
        {data.map((item, index)=>(
          <ListItemWithWiderSecondaryAction
            key={index}
            dense
            divider
          >
            <ListItemText
              primary={<Typography variant="body1" color="textPrimary" gutterBottom>
                {item.summary || ''}
              </Typography>}
              secondary={<React.Fragment>
                <Typography variant="body2" color="textSecondary">
                  {item.description || ''}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <UserChip username={item.username} /> @ {moment(item.createdAt).format('YYYY-MM-DD')}
                </Typography>
              </React.Fragment>}
            />
            <ListItemSecondaryAction>
              <Typography variant="body1" color="textPrimary" component="span" className={classes.hoursContainer} >
                {item.hours} {t('projectTasks_hours')}
              </Typography>
              {/* <ProjectTaskEditButton
                mode="edit"
                type="icon"
                item={item}
                onUpdate={handleRefresh}
              /> */}
            </ListItemSecondaryAction>
          </ListItemWithWiderSecondaryAction>
        ))}
      </List>
    </React.Fragment>
  );
}

ProjectContributions.propTypes = {
  project: PropTypes.object.isRequired,
};
