import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { useTranslation } from 'react-i18next';
// import Checkbox from '@material-ui/core/Checkbox';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

import {
  listKeywords,
  listNeeds,
  listTags,
} from 'graphql/queries';
import {
  createKeyword,
  createUserKeyword,
  deleteUserKeyword,
  createNeed,
  createUserNeed,
  deleteUserNeed,
  createProjectKeyword,
  deleteProjectKeyword,
  createProjectNeed,
  deleteProjectNeed,
  createTag,
  createProjectTag,
  deleteProjectTag,
} from 'graphql/mutations';
import {
  request,
  asyncListAll,
} from 'utils/graph';

import FormDialog from 'forms/components/FormDialog';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

const getPropsByMode = (mode) => {
  let listOptionsQueryName;
  let createQueryName;
  let key;
  let linkKey;
  let createJoinDataQueryName;
  let deleteJoinDataQueryName;
  switch (mode) {
  case 'user-keyword':
    key = 'keywordId';
    linkKey = 'username';
    listOptionsQueryName = listKeywords;
    createQueryName = createKeyword;
    createJoinDataQueryName = createUserKeyword;
    deleteJoinDataQueryName = deleteUserKeyword;
    break;
  case 'user-need':
    key = 'needId';
    linkKey = 'username';
    listOptionsQueryName = listNeeds;
    createQueryName = createNeed;
    createJoinDataQueryName = createUserNeed;
    deleteJoinDataQueryName = deleteUserNeed;
    break;
  case 'project-keyword':
    key = 'keywordId';
    linkKey = 'projectId';
    listOptionsQueryName = listKeywords;
    createQueryName = createKeyword;
    createJoinDataQueryName = createProjectKeyword;
    deleteJoinDataQueryName = deleteProjectKeyword;
    break;
  case 'project-tag':
    key = 'tagId';
    linkKey = 'projectId';
    listOptionsQueryName = listTags;
    createQueryName = createTag;
    createJoinDataQueryName = createProjectTag;
    deleteJoinDataQueryName = deleteProjectTag;
    break;
  case 'project-need':
    key = 'needId';
    linkKey = 'projectId';
    listOptionsQueryName = listNeeds;
    createQueryName = createNeed;
    createJoinDataQueryName = createProjectNeed;
    deleteJoinDataQueryName = deleteProjectNeed;
    break;
  default:
  }
  return {
    key,
    linkKey,
    listOptionsQueryName,
    createQueryName,
    createJoinDataQueryName,
    deleteJoinDataQueryName,
  };
};

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
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [defaultValues, setDefaultValues] = useState();
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
      setDefaultValues(null);
      if (onUpdate) {
        onUpdate();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (event, values) => {
    setValues([...values]);
  };

  useEffect(() => {
    setFilteredOptions(allOptions
      .map((option) => option.label)
      .filter((x) => !values.includes(x))
      .sort((a, b) => a > b ? 1 : -1));
  }, [allOptions, values]);

  useEffect(() => {
    const values = joinData.map((item) => item[mode.split('-')[1]].label);
    setDefaultValues(values);
    setValues(values);
  }, [joinData]);

  useEffect(() => {
    (async () => {
      const { listOptionsQueryName } = getPropsByMode(mode);
      const restuls = await asyncListAll(listOptionsQueryName, { limit: 1000 });
      console.log('restuls', restuls);
      setAllOptions(restuls);
    })();
  }, [mode]);

  if (!defaultValues) return null;

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
            <Autocomplete
              multiple
              id="tags-filled"
              options={filteredOptions}
              defaultValue={defaultValues}
              freeSolo
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label={title} placeholder="" />
              )}
              // renderOption={(option, { selected }) => (
              //   <React.Fragment>
              //     <Checkbox
              //       icon={icon}
              //       checkedIcon={checkedIcon}
              //       style={{ marginRight: 8 }}
              //       checked={selected}
              //     />
              //     {option.title}
              //   </React.Fragment>
              // )}
              onChange={handleChange}
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
