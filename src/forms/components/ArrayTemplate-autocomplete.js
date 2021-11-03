import React from 'react';
import PropTypes from 'prop-types';

import { Chip, TextField as MaterialTextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

// https://github.com/rjsf-team/react-jsonschema-form/issues/1960
export default function ArrayTemplate(props) {
  console.log('template props', props);

  const { title } = props;

  function handleChange(event, values) {
    // how to pass value (strings array) from Autocomplete to formData as an array value?
    // // props.formData = {...props.formData, [props.title]: value }; // formData is readOnly
    // console.log('handleChange', { event, values });
    // // props.onAddClick(event); //adds new item to the array, but without value.
    // console.log(props.items);
    values.forEach((value, index) => {
      props.items[index].children.props.onChange(value); // eslint-disable-line react/prop-types
    });
  }

  function renderTags(value, getTagProps) {
    console.log('renderTags', value);
    return value.map((option, index) => (
      <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
    ));
  }

  function renderInput(params) {
    console.log('renderInput', params);
    return (
      <MaterialTextField
        {...params}
        error={false}
        required={false}
        label={title}
        disabled={false}
      />
    );
  }

  return (
    <div>
      <Autocomplete
        fullWidth
        multiple
        options={[]}
        freeSolo
        onChange={handleChange}
        renderTags={renderTags}
        renderInput={renderInput}
      />
    </div>
  );
}

ArrayTemplate.propTypes = {
  title: PropTypes.string,
};
