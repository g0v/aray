import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import {
  asyncListAll,
} from 'utils/graph';
import { getPropsByMode } from './helpers';
import { useTranslation } from 'react-i18next';

export default function DataJoinEditorInput({
  title = '',
  showHelperText = true,
  mode = '',
  joinData,
  defaultValues: inDefaultValues,
  onChange,
  onUpdateOptions,
  disabled,
  freeSolo: inFreeSolo = true,
}) {
  const [allOptions, setAllOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [defaultValues, setDefaultValues] = useState(inDefaultValues);
  const [freeSolo, setFreeSolo] = useState(inFreeSolo);
  const { t } = useTranslation();

  const handleChange = (event, values) => {
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
        freeSolo,
      } = getPropsByMode(mode);
      const results = await asyncListAll(listOptionsQueryName, { limit: 1000 });
      setAllOptions(results);
      if (!freeSolo) {
        setFreeSolo(false);
      }

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
        freeSolo={freeSolo}
        disableCloseOnSelect
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
        aria-describedby="tags-filled-helper-text"
      />
      {showHelperText &&
        <FormHelperText id="tags-filled-helper-text">{t('user_inputTagsHelperText')}</FormHelperText>}
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
  freeSolo: PropTypes.bool,
  showHelperText: PropTypes.bool,
};
