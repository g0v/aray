import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { request } from 'utils/graph';
import { getEventProjectsByProjectId } from 'graphql/queries';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  hoursContainer: {
    paddingRight: theme.spacing(2),
  },
  links: {
    padding: 0,
  },
  tableContainer: {
    maxHeight: '70vh',
  },
}));

const formatEventName = (eventName) => {
  const splitReg = new RegExp('(\\s[\\|｜]\\s)|｜');
  const exec = splitReg.exec(eventName);
  if (!exec) {
    return { nth: eventName, name: eventName };
  } else {
    const splitStr = exec[0];
    const [hackath, name] = eventName.split(splitStr);
    return { nth: hackath, name };
  }
};

export default function ProjectPastProposals({ project }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const isMountedRef = useRef(true);

  useEffect(() => {
    isMountedRef.current = true;
    if (!project) return;
    (async () => {
      const {
        data: {
          getEventProjectsByProjectId: { items: results },
        },
      } = await request(getEventProjectsByProjectId, {
        projectId: project.id,
      });
      results.sort(
        (first, second) =>
          new Date(second.event.startDate) - new Date(first.event.startDate),
      );
      if (!isMountedRef.current) return;
      setData(results);
    })();
  }, [project]);

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.root} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>{t('event_name')}</TableCell>
            <TableCell>{t('event_StartDate')}</TableCell>
            <TableCell>{t('project_proposalName')}</TableCell>
            <TableCell>{t('project_proposalDescription')}</TableCell>
            <TableCell>{t('project_createdBy')}</TableCell>
            <TableCell>{t('project_proposalLinks')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{formatEventName(item.event.name).nth}</TableCell>
              <TableCell>
                {moment(item.event.startDate).format('YYYY-MM-DD')}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.user.name}</TableCell>
              <TableCell>
                <ul className={classes.links}>
                  {item.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        title={link.name}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ProjectPastProposals.propTypes = {
  project: PropTypes.object.isRequired,
};
