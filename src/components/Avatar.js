import React from 'react';
import PropTypes from 'prop-types';

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

export default function CustomAvatar({
  size = 24,
  variant = 'circle',
  showEditor = false,
  canEdit = false,
  src,
  fallbackSrc,
  s3Key,
  editorTitle,
  onUpdate,
}) {
  const classes = useStyles();

  const avatarStyle = {
    height: size,
    width: size,
    fontSize: size * 0.6,
  };

  if (!src) return null;

  return (
    <div className={classes.avatarContainer}>
      <Avatar
        alt={''}
        src={src}
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
        <div className={classes.editButton} style={{ right: `calc(50% - ${size/2}px)` }}>
          <AvatarEditor
            src={src}
            title={editorTitle}
            s3Key={s3Key}
            exportAsSquare={variant !== 'circle'}
            onUpdate={onUpdate}
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
  s3Key: PropTypes.string,
  editorTitle: PropTypes.string,
  onUpdate: PropTypes.func,
};
