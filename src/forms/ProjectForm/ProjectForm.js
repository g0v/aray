import React from 'react';
import PropTypes from 'prop-types';

import DataForm from 'forms/DataForm';
import { request } from 'utils/graph';
import { createOrUpdateProject } from 'graphql/mutations';

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
    console.log(data);
    await request(createOrUpdateProject, { input: data });
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
