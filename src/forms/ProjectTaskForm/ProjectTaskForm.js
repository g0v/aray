import React from 'react';
import PropTypes from 'prop-types';

import DataForm from 'forms/DataForm';
import { request } from 'utils/graph';
import { createProjectTask, updateProjectTask } from 'graphql/mutations';

import schema from './schema';
import uiSchema from './uiSchema';

export default function ProjectTaskForm({ ...props }) {
  const createFunc = async (data) => {
    console.log('ProjectForm:createFunc', data);

    await request(createProjectTask, { input: data });
  };

  const updateFunc = async (data) => {
    console.log('ProjectForm:updateFunc', data);
    const username = localStorage.getItem('app:username');
    data.updatedBy = username;
    data.updatedAt = new Date().toISOString();

    await request(updateProjectTask, { input: data });
  };

  return (
    <DataForm
      schema={schema}
      uiSchema={uiSchema}
      createFunc={createFunc}
      updateFunc={updateFunc}
      {...props}
    />
  );
}

ProjectTaskForm.propTypes = {
  data: PropTypes.object,
  formData: PropTypes.object,
  onComplete: PropTypes.func,
};
