import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
// import Chip from '@material-ui/core/Chip';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

import {
  request,
  asyncListAll,
} from 'utils/graph';

import FormDialog from 'forms/components/FormDialog';
import DataJoinEditorInput from './DataJoinEditorInput';
import { getPropsByMode } from './helpers';

export default function DataJoinEditor({
  title = '',
  mode = '',
  projectId,
  joinData = [],
  onUpdate,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [allOptions, setAllOptions] = useState([]);
  // const [filteredOptions, setFilteredOptions] = useState([]);
  // const [defaultValues, setDefaultValues] = useState();
  const [values, setValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      console.log('values', values);

      const username = localStorage.getItem('app:username');
      // create keywords if not exist
      const toCreateLabels = values.filter((value) => {
        return !allOptions.find(({ label }) => label === value);
      });

      console.log('toCreateLabels', toCreateLabels);

      const {
        key,
        linkKey,
        createQueryName,
        createJoinDataQueryName,
        deleteJoinDataQueryName,
      } = getPropsByMode(mode);
      console.log({
        key,
        linkKey,
      });
      const results = await Promise.all(toCreateLabels.map((label) => {
        return request(createQueryName, {
          input: {
            label,
            createdBy: username,
            updatedBy: username,
          },
        });
      }));

      console.log('results', results);

      const updatedAllOptions = [...allOptions, ...results.map((res) => {
        return res.data[Object.keys(res.data)[0]];
      })];
      setAllOptions([...updatedAllOptions]);

      console.log('updatedAllOptions', updatedAllOptions);

      console.log('joinData', joinData);
      const toCreateJoinData = [];
      const toRemoveJoinData = [];

      values.forEach((value) => {
        const matchedOption = updatedAllOptions.find(({ label }) => label === value);
        const matched = joinData.find((item) => item[key] === matchedOption.id);
        if (!matched) {
          toCreateJoinData.push({
            [key]: matchedOption.id,
            [linkKey]: projectId || username,
            createdBy: username,
            updatedBy: username,
          });
        }
      });

      joinData.forEach((item) => {
        const { label } = updatedAllOptions.find(({ id }) => id === item[key]);
        if (!values.includes(label)) {
          toRemoveJoinData.push({ id: item.id });
        }
      });

      console.log('toCreateJoinData', toCreateJoinData);
      console.log('toRemoveJoinData', toRemoveJoinData);

      await Promise.all([
        ...toCreateJoinData.map((item) => {
          return request(createJoinDataQueryName, { input: item });
        }),
        ...toRemoveJoinData.map((item) => {
          return request(deleteJoinDataQueryName, { input: item });
        }),
      ]);
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

  useEffect(() => {
    (async () => {
      const { listOptionsQueryName } = getPropsByMode(mode);
      const restuls = await asyncListAll(listOptionsQueryName, { limit: 1000 });
      console.log('restuls', restuls);
      setAllOptions(restuls);
    })();
  }, [mode]);

  return (
    <React.Fragment>
      <IconButton size="small" onClick={() => setOpen(true)}>
        <EditIcon />
      </IconButton>
      {open &&
          <FormDialog
            title={t('dataJoinEditor_update')}
            openOnInit={true}
            fullScreen={false}
            onClose={() => {
              setOpen(false);
            }}
          >
            <DataJoinEditorInput
              title={title}
              mode={mode}
              joinData={joinData}
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
                {t('dataJoinEditor_confirm')}
              </Button>
            </div>
          </FormDialog>}
    </React.Fragment>
  );
}

DataJoinEditor.propTypes = {
  projectId: PropTypes.string,
  title: PropTypes.string,
  mode: PropTypes.string,
  joinData: PropTypes.array,
  onUpdate: PropTypes.func,
};
