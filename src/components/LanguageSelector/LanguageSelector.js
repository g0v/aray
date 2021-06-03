import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { I18n } from 'aws-amplify';
import { Translations } from '@aws-amplify/ui-components';
import querystring from 'query-string';
import { useHistory } from 'react-router-dom';

import { getCache, setCache } from 'utils/cache';
import list from 'i18n/list';
import zhTwAuthString from 'i18n/Amplify_zh-TW';
import jaAuthString from 'i18n/Amplify_ja';
import koAuthString from 'i18n/Amplify_ko';

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
