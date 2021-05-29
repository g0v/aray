/* eslint-disable react/prop-types */

import React from 'react';

import { utils } from '@rjsf/core';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import AddButton from './AddButton';
import IconButton from './IconButton';

const {
  isMultiSelect,
  getDefaultRegistry,
} = utils;

const ArrayFieldTemplate = (props) => {
  const { schema, registry = getDefaultRegistry() } = props;

  // TODO: update types so we don't have to cast registry as any
  if (isMultiSelect(schema, registry.rootSchema)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

const ArrayFieldTitle = ({
  TitleField,
  idSchema,
  title,
  required,
}) => {
  if (!title) {
    return null;
  }

  const id = `${idSchema.$id}__title`;
  return (
    <FormControl fullWidth={true} required={required} style={{ height: 32 }}>
      <InputLabel id={id}>{title}</InputLabel>
    </FormControl>
  );
  // return <TitleField id={id} title={title} required={required} />;
};

const ArrayFieldDescription = ({
  DescriptionField,
  idSchema,
  description,
}) => {
  if (!description) {
    return null;
  }

  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const renderDefaultArrayItem = (props) => {
  const btnStyle = {
    flex: 1,
    // paddingLeft: 6,
    // paddingRight: 6,
    // fontWeight: 'bold',
    minWidth: 0,
  };
  return (
    <Grid container={true} key={props.key} alignItems="center">
      <Grid item={true} xs style={{ overflow: 'hidden' }}>
        {props.children}
      </Grid>

      {props.hasToolbar && (
        <Grid item={true}>
          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-up"
              className="array-item-move-up"
              tabIndex={-1}
              style={btnStyle}
              iconProps={{ fontSize: 'small' }}
              disabled={props.disabled || props.readonly || !props.hasMoveUp}
              onClick={props.onReorderClick(props.index, props.index - 1)}
            />
          )}

          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-down"
              tabIndex={-1}
              style={btnStyle}
              iconProps={{ fontSize: 'small' }}
              disabled={props.disabled || props.readonly || !props.hasMoveDown}
              onClick={props.onReorderClick(props.index, props.index + 1)}
            />
          )}

          {props.hasRemove && (
            <IconButton
              icon="close"
              tabIndex={-1}
              style={btnStyle}
              iconProps={{ fontSize: 'small' }}
              disabled={props.disabled || props.readonly}
              onClick={props.onDropIndexClick(props.index)}
            />
          )}
        </Grid>
      )}
    </Grid>
  );
};

const DefaultFixedArrayFieldTemplate = (props) => {
  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema['ui:description'] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(renderDefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className="array-item-add"
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate = (props) => {
  // console.log('DefaultNormalArrayFieldTemplate', props);
  return (
    <React.Fragment>
      <Box p={0}>
        <ArrayFieldTitle
          key={`array-field-title-${props.idSchema.$id}`}
          TitleField={props.TitleField}
          idSchema={props.idSchema}
          title={props.uiSchema['ui:title'] || props.title}
          required={props.required}
        />

        {(props.uiSchema['ui:description'] || props.schema.description) && (
          <ArrayFieldDescription
            key={`array-field-description-${props.idSchema.$id}`}
            DescriptionField={props.DescriptionField}
            idSchema={props.idSchema}
            description={
              props.uiSchema['ui:description'] || props.schema.description
            }
          />
        )}

        <Grid container={true} key={`array-item-list-${props.idSchema.$id}`}>
          {props.items && props.items.map((p) => renderDefaultArrayItem(p))}

          {props.canAdd && (
            <Grid container justify="center">
              <Grid item={true}>
                <Box mt={2}>
                  <AddButton
                    className="array-item-add"
                    onClick={props.onAddClick}
                    disabled={props.disabled || props.readonly}
                    title={props.title}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default ArrayFieldTemplate;
