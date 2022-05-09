import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green } from '@mui/material/colors';

const classes = {
  root: `FloatingActionButton-root`,
  fab: `FloatingActionButton-fab`,
  fabGreen: `FloatingActionButton-fabGreen`,
};

const StyledZoom = styled(Zoom)(({ theme }) => ({
  [`& .${classes.root}`]: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },

  [`& .${classes.fab}`]: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: 100,
  },

  [`& .${classes.fabGreen}`]: {
    'color': theme.palette.common.white,
    'backgroundColor': green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));

export default function FloatingActionButton({ mode = 'add', onClick }) {
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
    <StyledZoom
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
    </StyledZoom>
  );
}

FloatingActionButton.propTypes = {
  mode: PropTypes.string,
  onClick: PropTypes.func,
};
