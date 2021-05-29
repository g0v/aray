import React from 'react';
import Button from '@material-ui/core/Button';

export default function SubmitButton({ ...props }) {
  return (
    <Button
      type="submit"
      color="primary"
      variant="contained"
      style={{ marginTop: 16 }}
      {...props}
    >
      送出
    </Button>
  );
}
