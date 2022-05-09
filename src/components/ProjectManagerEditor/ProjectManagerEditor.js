import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
// import Chip from '@mui/material/Chip';
// import Autocomplete from '@mui/lab/Autocomplete';
// import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
// import Checkbox from '@mui/material/Checkbox';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';

import {
  request,
} from 'utils/graph';

import FormDialog from 'forms/components/FormDialog';
import ProjectManagerEditorInput from './ProjectManagerEditorInput';
import { getPropsByMode } from './helpers';

export default function ProjectManagerEditor({
  project,
  onUpdate,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [allOptions, setAllOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      console.log('values', values);
      console.log('allOptions', allOptions);

      const {
        createQueryName,
      } = getPropsByMode();

      const toUpdateProject = {
        id: project.id,
        status: project.status,
        managers: values,
        name: project.name,
      };

      await request(createQueryName, { input: toUpdateProject });

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
    <React.Fragment>
      <IconButton size="small" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      {open &&
          <FormDialog
            title={t('projectManagerEditor_update')}
            openOnInit={true}
            fullScreen={false}
            onClose={() => {
              setOpen(false);
            }}
          >
            <ProjectManagerEditorInput
              title={t('projectManagerEditor_title')}
              owner={project.owner}
              currentManagerUsernames={project.managers}
              onChange={setValues}
              onUpdateOptions={setAllOptions}
              disabled={isLoading}
            />
            <div style={{ width: '100%', textAlign: 'center', paddingTop: 16 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isLoading}
              >
                {t('projectManagerEditor_confirm')}
              </Button>
            </div>
          </FormDialog>}
    </React.Fragment>
  );
}

ProjectManagerEditor.propTypes = {
  project: PropTypes.object,
  onUpdate: PropTypes.func,
};
