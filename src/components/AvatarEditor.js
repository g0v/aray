import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import ReactAvatarEdit from 'react-avatar-edit';
import Resizer from 'react-image-file-resizer';
import { useTranslation } from 'react-i18next';
import { Storage } from 'aws-amplify';

import { updateUser, updateProject } from 'graphql/mutations';
import { request } from 'utils/graph';

import FormDialog from 'forms/components/FormDialog';

export default function AvatarEditor({
  // src,
  exportAsSquare = false,
  title = 'AvatarEditor Title',
  type = 'icon',
  size = 24,
  cropSize = 300,
  projectId,
  username,
  // s3Key,
  onUpdate,
}) {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // const onBeforeFileLoad = (elem) => {
  //   console.log(elem.target.files[0]);
  // };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      let s3Key;

      if (projectId) {
        s3Key = `projects/${projectId}/avatar.jpeg`;

        await request(updateProject, {
          input: {
            id: projectId,
            avatarS3Key: s3Key,
          },
        });
      }

      if (username) {
        s3Key = `users/${username}/avatar.png`;

        await request(updateUser, {
          input: {
            username,
            avatarS3Key: s3Key,
          },
        });
      }

      const res = await fetch(preview);
      const blob = await res.blob();
      const file = await new Promise((resolve) => {
        Resizer.imageFileResizer(
          blob,
          cropSize,
          cropSize,
          'PNG', // JPEG, PNG
          100,
          0,
          (uri) => {
            resolve(uri);
          },
          'blob', // base64, blob, file
        );
      });

      await Storage.put(s3Key, file);

      setOpen(false);

      if (onUpdate) {
        onUpdate(s3Key);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Tooltip title={title}>
      <React.Fragment>
        {type === 'icon' &&
          <IconButton
            aria-label={''}
            size={size}
            onClick={() => {
              if (!open) {
                setOpen(true);
              }
            }}
          >
            <EditIcon />
          </IconButton>}
        {open &&
          <FormDialog
            title={title}
            openOnInit={true}
            fullScreen={false}
            maxWidth={'sm'}
            onClose={() => {
              setOpen(false);
            }}
          >
            <Box align="center" justify="center" p={8}>
              <ReactAvatarEdit
                width={'100%'}
                height={300}
                // onBeforeFileLoad={onBeforeFileLoad}
                label={t('avatarEditor_clickAndUpload')}
                onCrop={onCrop}
                // onImageLoad={onImageLoad}
                // src={src}
                exportAsSquare={exportAsSquare}
              />
            </Box>
            <Grid container align="center" justify="center">
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                disabled={isLoading}
              >
                {t('avatarEditor_cancel')}
              </Button>
              <div style={{ flex: 1 }} />
              <Button
                disabled={!preview || isLoading}
                onClick={handleSubmit}
                color="primary"
                variant="contained"
              >
                {t('avatarEditor_submit')}
              </Button>
            </Grid>
          </FormDialog>}
      </React.Fragment>
    </Tooltip>);
}

AvatarEditor.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  cropSize: PropTypes.number,
  projectId: PropTypes.string,
  username: PropTypes.string,
  // s3Key: PropTypes.string,
  exportAsSquare: PropTypes.bool,
  onUpdate: PropTypes.func,
};
