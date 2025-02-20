import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Storage } from 'aws-amplify';

import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

import AvatarEditor from 'components//AvatarEditor';
import Colors from 'constants/Colors';

const useStyles = makeStyles((theme) => ({
  avatar: {
    // border: '1px solid rgba(255,255,255,0.3)',
    backgroundColor: '#fff',
  },
  avatarContainer: {
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.background.light,
    borderRadius: 50,
    zIndex: 10,
  },
}));

const cache = {};

export default function CustomAvatar({
  size = 24,
  variant = 'circular',
  showEditor = false,
  canEdit = false,
  projectId,
  username,
  s3Key: inS3Key,
  editorTitle,
}) {
  const classes = useStyles();

  const [fallbackSrc, setFallbackSrc] = useState();
  const [uri, setUri] = useState();
  const [s3Key, setS3Key] = useState(inS3Key);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());

  const avatarStyle = {
    height: size,
    width: size,
    fontSize: size * 0.6,
  };

  useEffect(() => {
    if (!s3Key) return;

    if (cache[s3Key]) {
      setUri(cache[s3Key]);
      return;
    }

    (async () => {
      const uri = await Storage.get(s3Key);
      setUri(uri);

      cache[s3Key] = uri;
    })();
  }, [lastUpdatedAt, s3Key]);

  useEffect(() => {
    if (!projectId) return;

    setFallbackSrc(`https://api.dicebear.com/9.x/shapes/svg?seed=${projectId}`);
  }, [projectId]);

  useEffect(() => {
    if (!username) return;

    setFallbackSrc(`https://robohash.org/${username}.png?set=set4`);
  }, [username]);

  if (!fallbackSrc) return null;

  return (
    <div className={classes.avatarContainer}>
      <Avatar
        alt={''}
        src={uri}
        variant={variant}
        style={avatarStyle}
        className={classes.avatar}
      >
        {/* Fallback to robot avatar */}
        <Avatar
          alt={''}
          src={fallbackSrc}
          variant={variant}
          style={avatarStyle}
        />
      </Avatar>
      {showEditor && canEdit &&
        <div className={classes.editButton} style={{ right: `calc(50% - ${size / 2}px)` }}>
          <AvatarEditor
            title={editorTitle}
            projectId={projectId}
            username={username}
            // s3Key={s3Key}
            exportAsSquare={variant !== 'circular'}
            onUpdate={(s3Key) => {
              cache[s3Key] = null;
              setS3Key(s3Key);
              setLastUpdatedAt(Date.now());
            }}
          />
        </div>
      }
    </div>
  );
}

CustomAvatar.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
  projectId: PropTypes.string,
  username: PropTypes.string,
  s3Key: PropTypes.string,
  editorTitle: PropTypes.string,
  onUpdate: PropTypes.func,
};
