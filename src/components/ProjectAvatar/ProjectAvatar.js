import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Avatar from 'components/Avatar';

export default function ProjectAvatar({
  projectId,
  size = 24,
  variant = 'square',
  showEditor = false,
  canEdit = false,
}) {
  const { t } = useTranslation();

  const [uri, setUri] = useState();
  const [s3Key, setS3Key] = useState();
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());

  useEffect(() => {
    if (!s3Key) return;
    (async () => {
      setUri(await Storage.get(s3Key));
    })();
  }, [lastUpdatedAt, s3Key]);

  useEffect(() => {
    if (!projectId) return;

    setS3Key(`projects/${projectId}/avatar.jpeg`);
  }, [projectId]);

  return (
    <Avatar
      size={size}
      cropSize={300}
      variant={variant}
      showEditor={showEditor}
      canEdit={canEdit}
      src={uri}
      fallbackSrc={`https://api.dicebear.com/9.x/shapes/svg?seed=${projectId}`}
      s3Key={s3Key}
      editorTitle={t('projectAvatar_updateAvatar')}
      onUpdate={() => setLastUpdatedAt(Date.now())}
    />);
}

ProjectAvatar.propTypes = {
  projectId: PropTypes.string.isRequired,
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
};
