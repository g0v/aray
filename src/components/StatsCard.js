import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Colors from 'constants/Colors';

const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${Colors.light2}`,
    borderRadius: 5,
    padding: theme.spacing(2),
  },
  label: {
    color: Colors.dark,
  },
}));

export default function StatsCard({ label, value }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h3" align="center">
        <NumberFormat
          value={value || 0}
          displayType="text"
          thousandSeparator={true}
        />
      </Typography>
      <Typography variant="body1" gutterBottom align="center" className={classes.label}>
        {label}
      </Typography>
    </div>
  );
}

StatsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
