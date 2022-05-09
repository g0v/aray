import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import Typography from '@mui/material/Typography';

import Colors from 'constants/Colors';

const classes = {
  container: `StatsCard-container`,
  label: `StatsCard-label`,
};

const Root = styled('div')(({ theme }) => ({
  [`&.${classes.container}`]: {
    border: `1px solid ${Colors.light2}`,
    borderRadius: 5,
    padding: theme.spacing(2),
  },

  [`& .${classes.label}`]: {
    color: Colors.dark,
  },
}));

export default function StatsCard({ label, value }) {
  return (
    <Root className={classes.container}>
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
    </Root>
  );
}

StatsCard.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
