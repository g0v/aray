import React from 'react';

import EditButton from '../components/EditButton';
import ProjectForm from './ProjectForm';

export default function ProjectEditButton({ ...props }) {
  return (
    <EditButton
      title="專案"
      form={ProjectForm}
      type="floating-button"
      {...props}
    />);
}
