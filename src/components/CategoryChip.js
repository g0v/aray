import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import Chip from '@material-ui/core/Chip';
// import { request } from 'utilities/graph';
import Chip from './Chip';
import Colors from 'constants/Colors';

export default function CategoryChip({
  data,
  target,
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
      url={target ? `/${target}s?categorys=${value}` : ''}
      color={Colors.primaryDark}
    />
  );
}

CategoryChip.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
  }),
  target: PropTypes.string,
};
