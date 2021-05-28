import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../components/EditButton';
import ProjectTaskForm from './ProjectTaskForm';

export default function ProjectTaskFormEditButton({ type = 'button', ...props }) {
  return (
    <EditButton
      title="專案任務資料"
      form={ProjectTaskForm}
      type={type}
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}

ProjectTaskFormEditButton.propTypes = {
  type: PropTypes.string,
};
