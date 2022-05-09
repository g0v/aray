import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const PREFIX = 'FormDialog';

const classes = {
  dialog: `${PREFIX}-dialog`,
  content: `${PREFIX}-content`,
  closeButton: `${PREFIX}-closeButton`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')(({ theme }) => ({
  [`& .${classes.dialog}`]: {
    // minWidth: 480,
  },

  [`& .${classes.content}`]: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },

  [`& .${classes.closeButton}`]: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

// FIXME checkout https://mui.com/components/use-media-query/#migrating-from-withwidth
const withWidth = () => (WrappedComponent) => (props) => <WrappedComponent {...props} width="xs" />;

const CustomDialogTitle = ({ children, onClose, ...other }) => {
  return (
    <DialogTitle className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
          size="large">
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

CustomDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};

function useIsWidthUp(breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}

function DetailFormDialog({
  children,
  title = '新增資料',
  openOnInit = false,
  onClose,
  fullScreen = false,
  maxWidth = 'md',
  width,
}) {
  const [open, setOpen] = useState(openOnInit);

  const handleClose = () => {
    setOpen(false);
    onClose && onClose();
  };

  const isWidthUp = useIsWidthUp('md');

  return (
    <Root>
      <Dialog
        open={open}
        fullScreen={isWidthUp('sm', width) ? fullScreen : true}
        fullWidth={true}
        maxWidth={maxWidth}
        onClose={handleClose}
        disableEscapeKeyDown={true}
        aria-labelledby="form-dialog-title"
        className={classes.dialog}>
        <CustomDialogTitle id="form-dialog-titlse" onClose={handleClose}>
          {title}
        </CustomDialogTitle>
        <DialogContent className={classes.content} dividers>
          {children}
        </DialogContent>
      </Dialog>
    </Root>
  );
}

DetailFormDialog.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  openOnInit: PropTypes.bool,
  onClose: PropTypes.func,
  fullScreen: PropTypes.bool,
  maxWidth: PropTypes.string,
  width: PropTypes.number,
};

export default withWidth()(DetailFormDialog);
