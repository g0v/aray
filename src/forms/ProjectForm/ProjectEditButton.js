import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../components/EditButton';
import ProjectForm from './ProjectForm';

export default function ProjectEditButton({ type = 'button', ...props }) {
  return (
    <EditButton
      title="專案資料"
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
