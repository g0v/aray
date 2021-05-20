import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    'color': theme.palette.common.white,
    'backgroundColor': green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButton({ mode = 'add', onClick }) {
  const classes = useStyles();
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add',
      mode: 'add',
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit',
      mode: 'edit',
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand',
      mode: 'expand',
    },
  ];

  const fab = fabs.find((item) => item.mode === mode);

  return (
    <Zoom
      key={fab.color}
      in={true}
      timeout={transitionDuration}
      style={{
        transitionDelay: `0ms`,
      }}
      unmountOnExit
    >
      <Fab aria-label={fab.label} className={fab.className} color={fab.color} onClick={onClick}>
        {fab.icon}
      </Fab>
    </Zoom>
  );
}

FloatingActionButton.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
};
