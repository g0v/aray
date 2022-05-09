/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const AddButton = (props) => (
  <Button {...props} color="secondary">
    <AddIcon />{props.title || ''}
  </Button>
);

export default AddButton;
