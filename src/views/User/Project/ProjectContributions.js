import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { useTranslation } from 'react-i18next';

import ContributionEditButton from 'forms/ContributionForm/ContributionEditButton';
import { request } from 'utils/graph';
import { getContributionsByProjectIdByCreatedAt } from 'graphql/queries';
import UserChip from 'components/UserChip';

const classes = {
  secondaryAction: `ProjectContributions-secondaryAction`,
  root: `ProjectContributions-root`,
  hoursContainer: `ProjectContributions-hoursContainer`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.root}`]: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },

  [`& .${classes.hoursContainer}`]: {
    paddingRight: theme.spacing(2),
  },
}));

const ListItemWithWiderSecondaryAction = ListItem;

export default function ProjectContributions({ project }) {
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
    <Root>
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
            classes={{
              secondaryAction: classes.secondaryAction,
            }}>
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
    </Root>
  );
}

ProjectContributions.propTypes = {
  project: PropTypes.object.isRequired,
};
