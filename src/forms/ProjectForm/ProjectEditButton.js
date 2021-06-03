import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import EditButton from '../components/EditButton';
import ProjectForm from './ProjectForm';

export default function ProjectEditButton({ type = 'button', ...props }) {
  const { t } = useTranslation();

  return (
    <EditButton
      title={t('projectEditButton_title')}
      form={ProjectForm}
      type={type}
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}

ProjectEditButton.propTypes = {
  type: PropTypes.string,
};
