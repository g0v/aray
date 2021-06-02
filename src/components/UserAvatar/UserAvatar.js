import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';
import { useTranslation } from 'react-i18next';

import Avatar from 'components/Avatar';

export default function UserAvatar({
  username,
  size = 24,
  variant = 'circle',
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
      const uri = await Storage.get(s3Key);
      setUri(uri);
    })();
  }, [lastUpdatedAt, s3Key]);

  useEffect(() => {
    if (!username) return;

    setS3Key(`users/${username}/avatar.png`);
  }, [username]);

  return (
    <Avatar
      size={size}
      variant={variant}
      showEditor={showEditor}
      canEdit={canEdit}
      src={uri}
      fallbackSrc={`https://avatars.dicebear.com/api/bottts/${username}.svg`}
      s3Key={s3Key}
      editorTitle={t('userAvatar_updateAvatar')}
      onUpdate={() => setLastUpdatedAt(Date.now())}
    />);
}

UserAvatar.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
};
