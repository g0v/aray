/* eslint-disable react/prop-types */
import React from 'react';

// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { utils } from '@rjsf/core';

const { asNumber, guessType } = utils;

const nums = new Set(['number', 'integer']);

const processValue = (schema, value) => {
  // 'enum' is a reserved word, so only 'type' and 'items' can be destructured
  const { type, items } = schema;
  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && nums.has(items.type)) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }

  // If type is undefined, but an enum is present, try and infer the type from
  // the enum values
  if (schema.enum) {
    if (schema.enum.every((x) => guessType(x) === 'number')) {
      return asNumber(value);
    } else if (schema.enum.every((x) => guessType(x) === 'boolean')) {
      return value === 'true';
    }
  }

  return value;
};

const SelectWidget = ({
  schema,
  id,
  options,
  label,
  required,
  disabled,
  readonly,
  value: inValue,
  multiple,
  autofocus,
  onChange,
  onBlur,
  onFocus,
  rawErrors = [],
}) => {
  const [value, setValue] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const [errorMsg, setErrorMsg] = React.useState();
  const {
    enumOptions,
    // enumDisabled,
  } = options;

  const emptyValue = multiple ? [] : '';

  // const _onChange = ({ target: { value } }) => onChange(processValue(schema, value));
  const _onBlur = ({ target: { value } }) => onBlur(id, processValue(schema, value));
  const _onFocus = ({ target: { value } }) => onFocus(id, processValue(schema, value));

  React.useEffect(() => {
    if (typeof inValue !== 'undefined') {
      const matched = enumOptions.find((option) => option.value === inValue);
      if (matched) {
        setValue(matched.label);
        setInputValue(matched.label);
      }
    } else {
      setValue(emptyValue);
      setInputValue(emptyValue);
    }
  }, [inValue, emptyValue, enumOptions]);

  const renderInput = (params) => {
    // console.log(params);
    return (<TextField
      {...params}
      label={label || schema.title}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      error={rawErrors.length > 0 || (errorMsg ? true : false)}
      required={required}
      InputLabelProps={{
        shrink: true,
      }}
      helperText={errorMsg || params.helperText}
    />);
  };

  return (
    <Autocomplete
      id={`${id}_${Math.random()}`}
      options={enumOptions.map(({ label }) => label)}
      required={required}
      // getOptionLabel={(option) => option.label}
      // style={{ width: 300 }}
      freeSolo
      value={value}
      onChange={(event, newItem) => {
        if (newItem) {
          const matched = enumOptions.find(({ label }) => label === newItem);
          if (matched) {
            onChange(matched.value);
            setErrorMsg();
          } else {
            setErrorMsg('沒有符合的資料');
          }
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        if (newInputValue) {
          const matched = enumOptions.find(({ label }) => label === newInputValue);
          if (matched) {
            onChange(matched.value);
            setErrorMsg();
          } else {
            setErrorMsg('沒有符合的資料');
          }
        }
      }}
      onBlur={_onBlur}
      onFocus={_onFocus}
      renderInput={renderInput}
    />
  );

  // return (
  //   <TextField
  //     id={id}
  //     label={label || schema.title}
  //     select
  //     value={typeof value === 'undefined' ? emptyValue : value}
  //     required={required}
  //     disabled={disabled || readonly}
  //     autoFocus={autofocus}
  //     error={rawErrors.length > 0}
  //     onChange={_onChange}
  //     onBlur={_onBlur}
  //     onFocus={_onFocus}
  //     InputLabelProps={{
  //       shrink: true,
  //     }}
  //     SelectProps={{
  //       multiple: typeof multiple === 'undefined' ? false : multiple,
  //     }}>
  //     {(enumOptions).map(({ value, label }, i) => {
  //       const disabled =
  //         enumDisabled && (enumDisabled).indexOf(value) != -1;
  //       return (
  //         <MenuItem key={i} value={value} disabled={disabled}>
  //           {label}
  //         </MenuItem>
  //       );
  //     })}
  //   </TextField>
  // );
};

export default SelectWidget;
