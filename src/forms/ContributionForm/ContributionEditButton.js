import React from 'react';
import PropTypes from 'prop-types';

import EditButton from '../components/EditButton';
import ContributoinForm from './ContributoinForm';

export default function ContributionEditButton({ type = 'button', ...props }) {
  return (
    <EditButton
      title="專案貢獻"
      form={ContributoinForm}
      type={type}
      variant="outlined"
      showIcon={false}
      fullWidth={true}
      {...props}
    />);
}

ContributionEditButton.propTypes = {
  type: PropTypes.string,
};
