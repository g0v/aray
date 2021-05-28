import React from 'react';
import PropTypes from 'prop-types';

import DataForm from 'forms/DataForm';
import { request } from 'utils/graph';
import { createOrUpdateProjectContributions } from 'graphql/mutations';

import schema from './schema';
import uiSchema from './uiSchema';

let cacheProjecTaskId;
export default function ContributionForm({ ...props }) {
  const createFunc = async (data) => {
    console.log('ContributionForm:createFunc', data);
    const projectId = data.projectId;

    delete data.createdAt;
    delete data.updatedAt;
    delete data.createdBy;
    delete data.updatedBy;

    await request(createOrUpdateProjectContributions, {
      input: {
        projectId,
        contributions: [data],
      },
    });
  };

  const updateFunc = async (data) => {
    console.log('ContributionForm:updateFunc', data);
    // const username = localStorage.getItem('app:username');
    // data.updatedBy = username;
    // data.updatedAt = new Date().toISOString();

    // await request(updateProjectTask, { input: data });
  };

  return (
    <DataForm
      schema={schema}
      uiSchema={uiSchema}
      createFunc={createFunc}
      updateFunc={updateFunc}
      onChangeUpdate={(formData) => {
        let shouldRefresh = false;
        if (cacheProjecTaskId !== formData.projectTaskId) {
          const projectTask = schema.properties.projectTaskId.data.find(({ id })=>id === formData.projectTaskId);
          formData.summary = projectTask.summary;
          formData.description = projectTask.description;
          formData.hours = projectTask.hours;
          cacheProjecTaskId = formData.projectTaskId;
          shouldRefresh = true;
        }
        return { formData, shouldRefresh };
      }}
      {...props}
    />
  );
}

ContributionForm.propTypes = {
  data: PropTypes.object,
  formData: PropTypes.object,
  onComplete: PropTypes.func,
};
