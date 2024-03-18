import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import yaml from 'js-yaml';

const defaultLng = 'zh-TW';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: defaultLng,
    backend: {
      /* translation file path */
      loadPath: `${process.env.PUBLIC_URL}/assets/i18n/{{ns}}/{{lng}}.yaml`,
      parse: (data) => yaml.load(data),
    },
    fallbackLng: defaultLng,
    debug: process.env.NODE_ENV === 'development',
    /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      // wait: true,
      useSuspense: false,
    },
  });

export default i18n;
