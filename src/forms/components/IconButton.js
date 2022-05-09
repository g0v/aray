/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Close from '@mui/icons-material/Close';

const mappings = {
  'close': Close,
  'plus': Add,
  'arrow-up': ArrowUpward,
  'arrow-down': ArrowDownward,
};

const IconButton = (props) => {
  const { icon, iconProps, ...otherProps } = props;
  const IconComp = mappings[icon];
  return (
    <Button {...otherProps} size='small'>
      <IconComp {...iconProps} />
    </Button>
  );
};

export default IconButton;
