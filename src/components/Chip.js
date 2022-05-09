import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
// import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Link as RouteLink } from 'react-router-dom';

const classes = {
  container: `Chip-container`,
};

const StyledLink = styled(Link)(({ theme }) => ({
  [`& .${classes.container}`]: {
    marginRight: 5,
    marginBottom: 5,
    display: 'inline-block',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
}));

export default function Chip({ label, url, color }) {
  const style = {
    color: '#fff',
    backgroundColor: color,
    border: `1px solid ${color}`,
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
  };

  return (
    <StyledLink
      to={url}
      component={url ? RouteLink : undefined}
      style={{
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <div className={classes.container} style={style}>
        {label}
      </div>
    </StyledLink>
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
};
