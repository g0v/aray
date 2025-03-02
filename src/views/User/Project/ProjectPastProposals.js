import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { request } from 'utils/graph';
import { getEventProjectsByProjectId } from 'graphql/queries';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import moment from 'moment';

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

export default function ProjectPastProposals({ project }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (!project) return;
    (async () => {
      const {
        data: {
          getEventProjectsByProjectId: { items: results },
        },
      } = await request(getEventProjectsByProjectId, {
        projectId: project.id,
      });
      results.sort((first, second ) => new Date(second.event.startDate) - new Date(first.event.startDate));
      setData(results);
    })();
  }, [project]);

  return (
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell>{t('event_name')}</TableCell>
          <TableCell>{t('event_StartDate')}</TableCell>
          <TableCell>{t('project_proposalName')}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.event.name}</TableCell>
            <TableCell>{moment(item.event.startDate).format('YYYY-MM-DD')}</TableCell>
            <TableCell>{item.title}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

ProjectPastProposals.propTypes = {
  project: PropTypes.object.isRequired,
};
