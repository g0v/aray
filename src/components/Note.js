import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Note({ data, variant = 'body1' }) {
  if (!data) return '';
  return (
    <React.Fragment>
      {data.split('\n').map((item, index)=>(
        <Typography
          key={index} style={{ margin: 0 }}
          variant={variant}
          color="textSecondary"
          component="p"
          gutterBottom
        >
          {item}
        </Typography>
      ))}
    </React.Fragment>);
}

Note.propTypes = {
  data: PropTypes.string,
  variant: PropTypes.string,
};
