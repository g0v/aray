import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { getCache, setCache } from 'utils/cache';
import list from 'i18n/list';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  input: {
    padding: '10px 14px',
  },
}));

const LanguageSelector = () => {
  const classes = useStyles();
  const { i18n } = useTranslation();
  const [currentValue, setCurrentValue] = useState(list[0].value);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCurrentValue(event.target.value);
    setCache('language', event.target.value);
  };

  useEffect(() => {
    const cache = getCache('language');
    if (cache) {
      setCurrentValue(cache);
      i18n.changeLanguage(cache);
    }
  }, [i18n]);

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <Select
        labelId="translation"
        id="translation"
        value={currentValue}
        onChange={handleChange}
        label="Language"
        size="small"
        input={<OutlinedInput classes={{ input: classes.input }} />}
      >
        {list.map(({ value, title }) => (
          <MenuItem key={value} value={value}>{title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
