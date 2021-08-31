import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {
  asyncListAll,
} from 'utils/graph';
import { getPropsByMode } from './helpers';

export default function ProjectOwnerEditorInput({
  title,
  owner,
  onChange,
  onUpdateOptions,
  disabled,
}) {
  const [allOptions, setAllOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  useEffect(() => {
    console.log('allOptions', allOptions);
    setFilteredOptions(allOptions
      .map((option) => option.username)
      .filter((x) => x !== owner && x !== value)
      .sort((a, b) => a > b ? 1 : -1));
  }, [allOptions, value, owner]);

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

  return (
    <React.Fragment>
      <Autocomplete
        id="project-owner"
        options={filteredOptions}
        defaultValue={''}
        // freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
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

ProjectOwnerEditorInput.propTypes = {
  title: PropTypes.string,
  owner: PropTypes.string,
  onChange: PropTypes.func,
  onUpdateOptions: PropTypes.func,
  disabled: PropTypes.bool,
};
