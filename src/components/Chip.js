import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

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

export default function Chip({ label, color }) {
  const classes = useStyles();

  const style = {
    color: '#fff',
    backgroundColor: color,
    border: `1px solid ${color}`,
    fontWeight: 'bold',
  };

  return (
    <div className={classes.container} style={style}>
      {label}
    </div>
  );
}

Chip.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
};
