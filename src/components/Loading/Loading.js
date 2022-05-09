import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

const classes = {
  backdrop: `Loading-backdrop`,
  container: `Loading-container`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.backdrop}`]: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#fff',
  },

  [`&.${classes.container}`]: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
}));

export default function Loading({ fullScreen = true }) {
  return fullScreen ? (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress color="primary" />
    </Backdrop>) : (
    <StyledContainer className={classes.container} style={{ textAlign: 'center' }}>
      <CircularProgress color="primary" />
    </StyledContainer>
  );
}

Loading.propTypes = {
  fullScreen: PropTypes.bool,
};
