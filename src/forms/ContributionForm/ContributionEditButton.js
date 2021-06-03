import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import EditButton from '../components/EditButton';
import ContributoinForm from './ContributoinForm';

export default function ContributionEditButton({ type = 'button', ...props }) {
  const { t } = useTranslation();

  return (
    <EditButton
      title={t('contributionEditButton_title')}
      form={ContributoinForm}
      type={type}
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}

ContributionEditButton.propTypes = {
  type: PropTypes.string,
};
