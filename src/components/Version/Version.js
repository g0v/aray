import React from 'react';
// import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import packageJson from '../../../package.json';

export default function Version() {
  const { t } = useTranslation();

  return (
    <span>
      {t('app_name')} v{packageJson.version}
    </span>);
}

Version.propTypes = {};
