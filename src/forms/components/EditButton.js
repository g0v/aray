import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import FormDialog from './FormDialog';
import FloatingActionButton from 'components/FloatingActionButton';

export default function EditButton({
  title,
  mode = 'edit',
  type = 'icon',
  size = 'small',
  variant = 'text',
  item,
  onUpdate,
  fullScreen = false,
  ...props // form
}) {
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState();

  const tooltipLabel = mode === 'edit' ? '修改資料' : '新增資料';

  return (
    <Tooltip title={tooltipLabel}>
      <React.Fragment>
        {type === 'icon' &&
          <IconButton
            aria-label={mode}
            size={size}
            onClick={() => {
              if (!open) {
                setOpen(true);
                setEditItem(item);
              }
            }}
          >
            {mode ==='edit' ? <EditIcon /> : <AddIcon />}
          </IconButton>}
        {type === 'floating-button' &&
          <FloatingActionButton
            mode={mode}
            onClick={() => {
              if (!open) {
                setOpen(true);
                setEditItem(item);
              }
            }}
          />
        }
        {type === 'button' &&
          <Button
            aria-label={mode}
            size={size}
            variant={variant}
            onClick={() => {
              if (!open) {
                setOpen(true);
                setEditItem(item);
              }
            }}
          >
            {mode ==='edit' ? <EditIcon /> : <AddIcon />}
            新增{title}
          </Button>}
        {open &&
          <FormDialog
            title={title}
            openOnInit={true}
            fullScreen={fullScreen}
            onClose={() => {
              setOpen(false);
              setEditItem();
            }}
          >
            <props.form
              formData={editItem}
              onComplete={(data) => {
                setOpen(false);
                setEditItem();
                onUpdate && onUpdate(data);
              }}
            />
          </FormDialog>}
      </React.Fragment>
    </Tooltip>);
}

EditButton.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.string,
  item: PropTypes.object,
  onUpdate: PropTypes.func,
  fullScreen: PropTypes.bool,
};
