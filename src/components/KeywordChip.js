import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
// import { request } from 'utilities/graph';

export default function KeywordChip({
  data,
  variant = 'outlined',
  size = 'small',
}) {
  const [value, setValue] = useState();

  useEffect(() => {
    if (!data) return;

    if (data.label) {
      setValue(data.label);
    } else {
      // db lookup
    }
  }, [data]);

  if (!value) return null;

  return (
    <Chip
      label={value}
      variant={variant}
      size={size}
      color={'secondary'}
      style={{ margin: 1 }}
    />
  );
}

KeywordChip.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
  }),
  variant: PropTypes.string,
  size: PropTypes.string,
};
