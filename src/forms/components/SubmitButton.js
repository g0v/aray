import React from 'react';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';

export default function SubmitButton({ ...props }) {
  const { t } = useTranslation();

  return (
    <Button
      type="submit"
      color="primary"
      variant="contained"
      style={{ marginTop: 16 }}
      {...props}
    >
      {t('submitButton_submit')}
    </Button>
  );
}
