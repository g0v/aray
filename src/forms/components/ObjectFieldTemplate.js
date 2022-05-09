/* eslint-disable react/prop-types */
import React from 'react';

import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import { utils } from '@rjsf/core';

import AddButton from './AddButton';

const classes = {
  root: `ObjectFieldTemplate-root`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')({
  [`& .${classes.root}`]: {
    marginTop: 10,
  },
});

const { canExpand } = utils;

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  disabled,
  readonly,
  uiSchema,
  idSchema,
  schema,
  formData,
  onAddClick,
}) => {
  return (
    <Root>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title-${Math.random()}`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description-${Math.random()}`}
          description={description}
        />
      )}
      <Grid container={true} spacing={2} className={classes.root}>
        {properties.map((element, index) => {
          const width = uiSchema[element.name] && uiSchema[element.name]['ui:width'] ?
            uiSchema[element.name]['ui:width'] : '100%';
          return (
            <Grid
              item={true}
              xs={12}
              key={index}
              style={{ marginBottom: '10px', width, maxWidth: width }}
            >
              {element.content}
            </Grid>
          );
        })}
        {canExpand(schema, uiSchema, formData) && (
          <Grid container justifyContent='flex-end'>
            <Grid item={true}>
              <AddButton
                className='object-property-expand'
                onClick={onAddClick(schema)}
                disabled={disabled || readonly}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
    </Root>
  );
};

export default ObjectFieldTemplate;
