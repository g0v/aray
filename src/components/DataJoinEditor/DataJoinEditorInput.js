import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {
  asyncListAll,
} from 'utils/graph';
import { getPropsByMode } from './helpers';

const filter = createFilterOptions();

export default function DataJoinEditorInput({
  title = '',
  mode = '',
  joinData,
  defaultValues: inDefaultValues,
  onChange,
  onUpdateOptions,
  disabled,
}) {
  const [allOptions, setAllOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [defaultValues, setDefaultValues] = useState(inDefaultValues);

  const handleChange = (event, newValues) => {
    const values = newValues.map((item) => {
      if (typeof item === 'string') {
        return item;
      } else {
        return item.inputValue;
      }
    });
    setValues([...values]);
    onChange(values);
  };

  useEffect(() => {
    setFilteredOptions(allOptions
      .map((option) => option.label)
      .filter((x) => !values.includes(x))
      .sort((a, b) => a > b ? 1 : -1));
  }, [allOptions, values]);

  useEffect(() => {
    if (!joinData) return;
    const values = joinData.map((item) => item[mode.split('-')[1]].label);
    setDefaultValues(values);
    setValues(values);
  }, [joinData]);

  useEffect(() => {
    (async () => {
      const {
        listOptionsQueryName,
      } = getPropsByMode(mode);
      const results = await asyncListAll(listOptionsQueryName, { limit: 1000 });
      setAllOptions(results);

      if (onUpdateOptions) {
        onUpdateOptions(results);
      }
    })();
  }, [mode]);

  if (!defaultValues) return null;

  return (
    <React.Fragment>
      <Autocomplete
        multiple
        id="tags-filled"
        options={filteredOptions}
        defaultValue={defaultValues}
        selectOnFocus
        clearOnBlur
        freeSolo
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }
          return filtered;
        }}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          }
          return option.title;
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip key={index} variant="outlined" label={typeof option === 'string' ? option : option.inputValue} {...getTagProps({ index })} />
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
  projectId: PropTypes.string,
  title: PropTypes.string,
  mode: PropTypes.string,
  joinData: PropTypes.array,
  defaultValues: PropTypes.array,
  onChange: PropTypes.func,
  onUpdateOptions: PropTypes.func,
  disabled: PropTypes.bool,
};
