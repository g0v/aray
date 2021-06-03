import React from 'react';
import { useTranslation } from 'react-i18next';

import EditButton from '../components/EditButton';
import UserForm from './UserForm';

export default function UserEditButton({ ...props }) {
  const { t } = useTranslation();

  return (
    <EditButton
      title={t('userEditButton_title')}
      form={UserForm}
      type="button"
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}
