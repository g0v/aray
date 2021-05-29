/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Close from '@material-ui/icons/Close';

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
