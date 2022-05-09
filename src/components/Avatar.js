import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Avatar from '@mui/material/Avatar';

import AvatarEditor from 'components//AvatarEditor';
import Colors from 'constants/Colors';

const classes = {
  avatar: `Avatar-avatar`,
  avatarContainer: `Avatar-avatarContainer`,
  editButton: `Avatar-editButton`,
};

const Root = styled('div')(({ theme }) => ({
  [`& .${classes.avatar}`]: {
    // border: '1px solid rgba(255,255,255,0.3)',
    backgroundColor: '#fff',
  },

  [`&.${classes.avatarContainer}`]: {
    position: 'relative',
  },

  [`& .${classes.editButton}`]: {
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
  const avatarStyle = {
    height: size,
    width: size,
    fontSize: size * 0.6,
  };

  if (!src) return null;

  return (
    <Root className={classes.avatarContainer}>
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
            title={editorTitle}
            s3Key={s3Key}
            exportAsSquare={variant !== 'circle'}
            onUpdate={onUpdate}
          />
        </div>
      }
    </Root>
  );
}

CustomAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  fallbackSrc: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  showEditor: PropTypes.bool,
  canEdit: PropTypes.bool,
  s3Key: PropTypes.string,
  editorTitle: PropTypes.string,
  onUpdate: PropTypes.func,
};
