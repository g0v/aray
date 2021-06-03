/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => (
  <Button {...props} color="secondary">
    <AddIcon />{props.title || ''}
  </Button>
);

export default AddButton;
