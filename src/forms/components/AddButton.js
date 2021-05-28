/* eslint-disable react/prop-types */
import React from 'react';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => (
  <Button {...props} color="secondary">
    <AddIcon /> 新增{props.title || ''}項目
  </Button>
);

export default AddButton;
