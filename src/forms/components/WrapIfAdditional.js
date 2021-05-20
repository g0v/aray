/* eslint-disable react/prop-types, no-prototype-builtins */
import React from 'react';

import { utils } from '@rjsf/core';

import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import IconButton from './IconButton';

const { ADDITIONAL_PROPERTY_FLAG } = utils;

const WrapIfAdditional = ({
  children,
  disabled,
  id,
  label,
  onDropPropertyClick,
  onKeyChange,
  readonly,
  required,
  schema,
  uiSchema,
}) => {
  const keyLabel = `${label} Key`; // i18n ?
  const additional = schema.hasOwnProperty(ADDITIONAL_PROPERTY_FLAG);
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  };
  const width = uiSchema['ui:width'] || '100%';

  if (!additional) {
    return <>{children}</>;
  }

  const handleBlur = ({ target }) =>
    onKeyChange(target.value);

  return (
    <Grid container={true} key={`${id}-key`} alignItems='center' spacing={2} style={{ width }}>
      <Grid item={true} xs>
        <FormControl fullWidth={true} required={required}>
          <InputLabel>{keyLabel}</InputLabel>
          <Input
            defaultValue={label}
            disabled={disabled || readonly}
            id={`${id}-key`}
            name={`${id}-key`}
            onBlur={!readonly ? handleBlur : undefined}
            type='text'
          />
        </FormControl>
      </Grid>
      <Grid item={true} xs>
        {children}
      </Grid>
      <Grid item={true}>
        <IconButton
          icon='remove'
          tabIndex={-1}
          style={btnStyle}
          disabled={disabled || readonly}
          onClick={onDropPropertyClick(label)}
        />
      </Grid>
    </Grid>
  );
};

export default WrapIfAdditional;
