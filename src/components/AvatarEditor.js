import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import ReactAvatarEdit from 'react-avatar-edit';
import Resizer from 'react-image-file-resizer';
import { useTranslation } from 'react-i18next';
import { Storage } from 'aws-amplify';

import FormDialog from 'forms/components/FormDialog';

export default function AvatarEditor({
  // src,
  exportAsSquare = false,
  title = 'AvatarEditor Title',
  type = 'icon',
  size = 24,
  cropSize = 300,
  s3Key,
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
        onUpdate();
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
            <Grid container align="center" justifyContent="center">
              <Button
                onClick={()=> setOpen(false)}
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
    </Tooltip>
  );
}

AvatarEditor.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  cropSize: PropTypes.number,
  s3Key: PropTypes.string,
  exportAsSquare: PropTypes.bool,
  onUpdate: PropTypes.func,
};
