/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import InputLabel from '@material-ui/core/InputLabel';

import TextEditor from 'components/TextEditor';

export default function TextareaWidget({
  id,
  placeholder,
  value: inValue = '',
  required,
  disabled,
  autofocus,
  label,
  name,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
  formContext,
}) {
  const [defaultValue, setDefaultValue] = useState(inValue);
  // eslint-disable-next-line no-shadow
  const _onChange = (value) =>
    onChange && onChange(value === '' ? options.emptyValue : value);
  // const _onBlur = () => onBlur && onBlur(id, value);
  // const _onFocus = () => onFocus && onFocus(id, value);

  useEffect(() => {
    setDefaultValue(inValue);
  }, [id]);

  return (
    <React.Fragment>
      <InputLabel shrink>
        {schema.title || label}
      </InputLabel>
      <TextEditor
        label={schema.title || label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={_onChange}
      />
    </React.Fragment>
  );
  // return (
  //   <Form.TextArea
  //     id={id}
  //     key={id}
  //     label={schema.title || label}
  //     placeholder={placeholder}
  //     autoFocus={autofocus}
  //     required={required}
  //     disabled={disabled || readonly}
  //     name={name}
  //     value={value || ''}
  //     rows={options.rows || 5}
  //     onChange={_onChange}
  //     onBlur={_onBlur}
  //     onFocus={_onFocus}
  //   />
  // );
}
