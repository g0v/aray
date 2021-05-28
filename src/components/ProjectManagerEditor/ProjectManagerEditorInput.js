import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {
  asyncListAll,
} from 'utils/graph';
import { getPropsByMode } from './helpers';

export default function DataJoinEditorInput({
  title,
  owner,
  currentManagerUsernames = [],
  onChange,
  onUpdateOptions,
  disabled,
}) {
  const [allOptions, setAllOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [defaultValues, setDefaultValues] = useState();

  const handleChange = (event, values) => {
    setValues([...values]);
    onChange(values);
  };

  useEffect(() => {
    console.log('allOptions', allOptions);
    setFilteredOptions(allOptions
      .map((option) => option.username)
      .filter((x) => x !== owner && !values.includes(x))
      .sort((a, b) => a > b ? 1 : -1));
  }, [allOptions, values, owner]);

  useEffect(() => {
    setDefaultValues(currentManagerUsernames);
    setValues(currentManagerUsernames);
  }, [currentManagerUsernames]);

  useEffect(() => {
    (async () => {
      const {
        listOptionsQueryName,
      } = getPropsByMode();
      const results = await asyncListAll(listOptionsQueryName, { limit: 1000 });
      setAllOptions(results);

      if (onUpdateOptions) {
        onUpdateOptions(results);
      }
    })();
  }, []);

  if (!defaultValues) return null;

  return (
    <React.Fragment>
      <Autocomplete
        multiple
        id="project-managers"
        options={filteredOptions}
        defaultValue={defaultValues}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
            // <React.Fragment key={index}>
            //   {chip({
            //     data: { label: option },
            //     ...getTagProps({ index }),
            //   })}
            // </React.Fragment>
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label={title} placeholder="" />
        )}
        onChange={handleChange}
        disabled={disabled}
      />
    </React.Fragment>
  );
}

DataJoinEditorInput.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  currentManagerUsernames: PropTypes.array,
  onChange: PropTypes.func,
  onUpdateOptions: PropTypes.func,
  disabled: PropTypes.bool,
};
