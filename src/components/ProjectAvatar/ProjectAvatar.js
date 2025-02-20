import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Avatar from 'components/Avatar';

export default function ProjectAvatar({
  project,
  size = 24,
  variant = 'square',
  showEditor = false,
  canEdit = false,
}) {
  const { t } = useTranslation();

  return (
    <Avatar
      size={size}
      cropSize={300}
      variant={variant}
      showEditor={showEditor}
      canEdit={canEdit}
      projectId={project.id}
      s3Key={project.avatarS3Key}
      editorTitle={t('projectAvatar_updateAvatar')}
    />);
}

ProjectAvatar.propTypes = {
  project: PropTypes.object,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
};
