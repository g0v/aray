import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { I18n } from 'aws-amplify';
import querystring from 'query-string';
import { useHistory } from 'react-router-dom';

import { getCache, setCache } from 'utils/cache';
import list from 'i18n/list';
// import zhTwAuthString from 'i18n/Amplify_zh-TW';
// import jaAuthString from 'i18n/Amplify_ja';
// import koAuthString from 'i18n/Amplify_ko';

// const dict = {
//   'zh': zhTwAuthString,
//   'ja': jaAuthString,
//   'ko': koAuthString,
// };

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
    console.log('handleChange', code);

    i18n.changeLanguage(code);
    I18n.setLanguage(code);

    setCurrentValue(code);
    setCache('language', code);

    history.push({
      search: `?lang=${code}`,
    });
  };

  useEffect(() => {
    const { lang } = querystring.parse(window.location.search);

    const cache = lang || getCache('language');
    console.log('i18n cache', cache);
    if (cache) {
      setCurrentValue(cache);
      i18n.changeLanguage(cache);
      I18n.setLanguage(cache);
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
