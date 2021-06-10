import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
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
  const classes = useStyles();

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
    <Link
      to={url}
      component={RouteLink}
      style={{
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <div className={classes.container} style={style}>
        {label}
      </div>
    </Link>
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  url: PropTypes.string,
};
