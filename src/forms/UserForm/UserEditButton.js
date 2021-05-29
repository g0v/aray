import React from 'react';

import EditButton from '../components/EditButton';
import UserForm from './UserForm';

export default function UserEditButton({ ...props }) {
  return (
    <EditButton
      title="個人資料"
      form={UserForm}
      type="button"
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}
