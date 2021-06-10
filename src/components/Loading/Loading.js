import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

export default function Loading({ fullScreen = true }) {
  const classes = useStyles();

  return fullScreen ? (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="primary" />
    </Backdrop>) : (
    <Container className={classes.container} style={{ textAlign: 'center' }}>
      <CircularProgress color="primary" />
    </Container>
  );
}

Loading.propTypes = {
  fullScreen: PropTypes.bool,
};
