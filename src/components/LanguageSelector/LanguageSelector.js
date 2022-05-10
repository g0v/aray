import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import { I18n } from 'aws-amplify';
import { Translations } from '@aws-amplify/ui-components';
import querystring from 'query-string';
import { useHistory } from 'react-router-dom';
import { alpha } from '@mui/material/styles';

import { getCache, setCache } from 'utils/cache';
import list from 'i18n/list';
import zhTwAuthString from 'i18n/Amplify_zh-TW';
import jaAuthString from 'i18n/Amplify_ja';
import koAuthString from 'i18n/Amplify_ko';

const classes = {
  formControl: `LanguageSelector-formControl`,
  input: `LanguageSelector-input`,
};

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  [`&.${classes.formControl}`]: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: '#fff',
    borderRadius: 5,
  },

  [`& .${classes.input}`]: {
    padding: '10px 14px',
    backgroundColor: alpha('#000000', 0.1),
  },
}));

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const history = useHistory();

  const [currentValue, setCurrentValue] = useState(list[0].value);

  const handleChange = (event) => {
    const code = event.target.value;
    i18n.changeLanguage(code);
    setCurrentValue(code);
    setCache('language', code);
    history.push({
      search: `?lang=${code}`,
    });
  };

  useEffect(() => {
    const { lang } = querystring.parse(window.location.search);

    const cache = lang || getCache('language');
    if (cache) {
      setCurrentValue(cache);
      i18n.changeLanguage(cache);
    }
  }, [i18n]);

  useEffect(() => {
    if (!currentValue) return;
    let authStrings;
    switch (currentValue) {
    case 'en-US':
      authStrings = Translations;
      break;
    case 'ja':
      authStrings = jaAuthString;
      break;
    case 'ko':
      authStrings = koAuthString;
      break;
    case 'zh-TW':
    default:
      authStrings = zhTwAuthString;
      break;
    }
    I18n.putVocabulariesForLanguage('en-US',
      Object.keys(authStrings).reduce((obj, key) => {
        obj[Translations[key]] = authStrings[key];
        return obj;
      }, {}),
    );
  }, [currentValue]);

  return (
    <StyledFormControl variant="outlined" className={classes.formControl}>
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
    </StyledFormControl>
  );
};

export default LanguageSelector;
