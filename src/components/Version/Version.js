import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import packageJson from '../../../package.json';
import amplifyConfig from '../../aws-exports';

export default function Version({ showName = false, ...props }) {
  const { t } = useTranslation();

  const envName = amplifyConfig.aws_cloud_logic_custom[0].endpoint.split('/').pop();
  const isPrd = envName === 'prd' || process.env.NODE_ENV !== 'development';
  const env = isPrd ? '' : `${envName.toUpperCase()} `;

  return (
    <span {...props}>
      {showName ? `${t('app_name')} ` : ''}
      {env}
      v{packageJson.version}
    </span>);
}

Version.propTypes = {
  showName: PropTypes.bool,
};
