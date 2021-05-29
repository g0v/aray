import React from 'react';
import PropTypes from 'prop-types';

import DataForm from 'forms/DataForm';
import { request } from 'utils/graph';
import { createOrUpdateProject, updateProject } from 'graphql/mutations';

import schema from './schema';
import uiSchema from './uiSchema';

export default function ProjectForm({ ...props }) {
  const createFunc = async (data) => {
    console.log(data);
    delete data.createdAt;
    delete data.updatedAt;
    delete data.createdBy;
    delete data.updatedBy;

    await request(createOrUpdateProject, { input: data });
  };

  const updateFunc = async (data) => {
    console.log('ProjectForm:updateFunc', data);
    const username = localStorage.getItem('app:username');
    const {
      id,
      status,
      name,
      summary,
      description,
      links,
    } = data;
    const input = {
      id,
      status,
      name,
      summary,
      description,
      links,
      updatedBy: username,
    };

    await request(updateProject, { input });
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

ProjectForm.propTypes = {
  data: PropTypes.object,
  formData: PropTypes.object,
  onComplete: PropTypes.func,
};
