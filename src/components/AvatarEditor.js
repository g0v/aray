import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import ReactAvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone';
import Resizer from 'react-image-file-resizer';
import { useTranslation } from 'react-i18next';
import { Storage } from 'aws-amplify';

import FormDialog from 'forms/components/FormDialog';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AvatarEditor({
  src,
  exportAsSquare = false,
  title = 'AvatarEditor Title',
  type = 'icon',
  size = 'medium',
  cropSize = 300,
  s3Key,
  onUpdate,
}) {
  const { t } = useTranslation();
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState(src);
  const [isLoading, setIsLoading] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

  const editorRef = useRef(null);

  const onDrop = (dropped) => {
    setPreview(dropped[0]);
  };

  const onCancel = () => {
    setPreview(src);
    setScale(1);
    setRotate(0);
    setPosition({ x: 0.5, y: 0.5 });
    setOpen(false);
  };

  const handleScale = (event, newValue) => {
    const scale = parseFloat(newValue);
    setScale(scale);
  };

  const rotateScale = (event, newValue) => {
    const scale = parseFloat(newValue);
    setRotate(scale);
  };

  const rotateLeft = (e) => {
    setRotate(rotate - 90);
  };

  const rotateRight = (e) => {
    setRotate(rotate + 90);
  };

  const handlePositionChange = (position) => {
    setPosition(position);
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const canvas = await editorRef.current.getImageScaledToCanvas().toDataURL();
      const res = await fetch(canvas);
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
            onClose={onCancel}
          >
            <Box align="center" justify="center" p={8}>
              <Dropzone
                onDrop={(dropped) => onDrop(dropped)}
                noClick
                multiple={false}
                style={{ width: '300px', height: '300px' }}
              >
                {({ getRootProps, getInputProps }) => {
                  return (
                    <div {...getRootProps()}>
                      <ReactAvatarEditor
                        ref={editorRef}
                        image={preview}
                        border={2}
                        scale={parseFloat(scale)}
                        width={cropSize}
                        height={cropSize}
                        position={position}
                        onPositionChange={handlePositionChange}
                        rotate={parseFloat(rotate)}
                        borderRadius={cropSize / 2}
                        crossOrigin="anonymous"
                      />
                      <Grid container alignItems="center" spacing={2}>
                        <Grid item>
                          <Typography gutterBottom>
                            New File:
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <input
                            name="newImage"
                            type="file"
                            onChange={(e) => onDrop(e.target.files)}
                            {...getInputProps()}
                            style={{ display: 'initial' }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  );
                }}
              </Dropzone>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography id="zoom" gutterBottom>
                    Zoom:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Slider
                    aria-labelledby="zoom"
                    min={1.00}
                    max={2.00}
                    step={0.01}
                    value={scale}
                    onChange={handleScale}
                  />
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography gutterBottom>
                    Rotate:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Button size="small" variant="outlined" className={classes.button} onClick={rotateLeft}>Left</Button>
                  <Button size="small" variant="outlined" className={classes.button} onClick={rotateRight}>Right</Button>
                </Grid>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Typography id="rotation-scale" gutterBottom>
                    Rotation Scale:
                  </Typography>
                </Grid>
                <Grid item xs>
                  <Slider
                    aria-labelledby="rotation-scale"
                    min={0}
                    max={180}
                    step={1}
                    value={rotate}
                    onChange={rotateScale}
                  />
                </Grid>
              </Grid>
            </Box>
            <Grid container align="center" justify="center">
              <Button
                onClick={onCancel}
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
  size: PropTypes.string,
  cropSize: PropTypes.number,
  s3Key: PropTypes.string,
  exportAsSquare: PropTypes.bool,
  onUpdate: PropTypes.func,
};
