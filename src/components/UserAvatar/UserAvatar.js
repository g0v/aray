import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Avatar from 'components/Avatar';

import { getUser } from 'graphql/queries';
import { request } from 'utils/graph';

export default function UserAvatar({
  username,
  user: inUser,
  size = 24,
  variant = 'circular',
  showEditor = false,
  canEdit = false,
}) {
  const { t } = useTranslation();

  const [user, setUser] = useState(inUser);

  useEffect(() => {
    if (!username) return;

    (async () => {
      const { data: { getUser: data } } = await request(getUser, { username });
      setUser(data);
    })();
  }, [username]);

  if (!user) return null;

  return (
    <Avatar
      size={size}
      variant={variant}
      showEditor={showEditor}
      canEdit={canEdit}
      username={user.username}
      s3Key={user.avatarS3Key}
      editorTitle={t('userAvatar_updateAvatar')}
    />);
}

UserAvatar.propTypes = {
  user: PropTypes.object.isRequired,
  username: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
};
