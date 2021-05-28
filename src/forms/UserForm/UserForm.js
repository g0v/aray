import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import DataForm from 'forms/DataForm';
import { request } from 'utils/graph';
import { updateUser } from 'graphql/mutations';

import schema from './schema';
import uiSchema from './uiSchema';

export default function UserForm({ ...props }) {
  const createFunc = async (data) => {
    console.log('createFunc', data);
    const username = localStorage.getItem('app:username');

    const {
      name,
      email,
      selfIntroduction,
      location,
      // timeZone,
      slackId,
      urlWebsite,
      urlGithub,
      urlLinkedIn,
      urlFacebook,
      urlTwitter,
      urlInstagram,
    } = data;
    await request(updateUser, {
      input: {
        username,
        name,
        email,
        selfIntroduction,
        location,
        timeZone: moment.tz.guess(),
        slackId,
        urlWebsite,
        urlGithub,
        urlLinkedIn,
        urlFacebook,
        urlTwitter,
        urlInstagram,
        updatedBy: username,
      },
    });
  };

  const updateFunc = async (data) => {};

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

UserForm.propTypes = {
  data: PropTypes.object,
  formData: PropTypes.object,
  onComplete: PropTypes.func,
};
