import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from '@rjsf/material-ui';
import Grid from '@material-ui/core/Grid';

import {
  getLinksSchema,
  getUsernameSchema,
  getProjectTaskIdSchema,
} from 'forms/schemas';
import {
  getLinksUiSchema,
} from 'forms/uiSchema';
import ArrayTemplate from './components/ArrayTemplate';
import ObjectFieldTemplate from './components/ObjectFieldTemplate';
import FieldTemplate from './components/FieldTemplate';
import SelectWidget from './components/SelectWidget';
import SubmitButton from './components/SubmitButton';

// https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/form-props/
// formData
// onSubmit

const widgets = {
  SelectWidget,
};

export default function DataForm({
  schema: inSchema,
  uiSchema: inUiSchema,
  createFunc,
  updateFunc,
  onComplete,
  formData: inFormData,
  children,
  onChange,
  onChangeUpdate,
  hideSubmitButton = false,
  ...props
}) {
  const [schema, setSchema] = useState();
  const [uiSchema, setUiSchema] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const [dirty, setDirty] = useState(false);

  const reload = () => {
    const currentSchema = schema;
    setSchema(undefined);
    setTimeout(() => {
      setSchema(currentSchema);
    });
  };

  const handleSubmit = async ({ formData }) => {
    try {
      setIsLoading(true);
      setFormData(formData); // persist the data;

      const now = new Date().toISOString();
      const username = localStorage.getItem('app:username');

      let data;
      let returnData;
      if (formData.id) {
        data = Object.assign({
          updatedAt: now,
          updatedBy: username,
        }, formData);
        returnData = await updateFunc(data);
      } else {
        data = Object.assign({
          createdAt: now,
          createdBy: username,
          updatedAt: now,
          updatedBy: username,
        }, formData);
        returnData = await createFunc(data);
      }

      onComplete && onComplete(returnData || data);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (schema) return;

    (async () => {
      // Update schema
      const extMappings = [
        { key: 'username', func: getUsernameSchema },
        { key: 'links', func: getLinksSchema },
        { key: 'projectTaskId', func: () => getProjectTaskIdSchema((inFormData || {}).projectId) },
      ];
      const schema = inSchema;

      const promises = Object.keys(schema.properties).map(async (key) => {
        const matched = extMappings.find((item) => item.key === key);
        if (matched) {
          const currentValue = (inFormData || {})[key];
          const extSchema = await matched.func(currentValue, schema.properties[key].title);
          schema.properties[key] = Object.assign(schema.properties[key], extSchema);
        }
      });
      await Promise.all(promises);

      setSchema(schema);

      // UI Schema
      const uiSchema = inUiSchema;
      const extUiMappings = [
        { key: 'links', func: getLinksUiSchema },
      ];
      Object.keys(schema.properties).forEach((key) => {
        const matched = extUiMappings.find((item) => item.key === key);
        if (matched) {
          const extSchema = matched.func();
          uiSchema[key] = Object.assign((uiSchema[key] || {}), extSchema);
        }
      });

      setUiSchema(uiSchema);
    })();
  }, [inSchema, schema, inUiSchema, inFormData]);

  useEffect(() => {
    setFormData(inFormData);
  }, [inFormData]);

  if (!schema) return null;

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={handleSubmit}
      disabled={isLoading}
      showErrorList={false}
      // liveValidate={onChangeUpdate ? true : false}
      onChange={({ formData, ...props }) => {
        console.log(props);
        if (process.env.NODE_ENV !== 'production') {
          console.log('formData update', formData);
        }

        let shouldRefresh = false;
        if (onChangeUpdate) {
          const res = onChangeUpdate(formData);
          formData = res.formData;
          shouldRefresh = res.shouldRefresh;
        }
        setFormData(formData);
        setDirty(true);
        onChange && onChange(formData);

        if (shouldRefresh) {
          reload();
        }
      }}
      ArrayFieldTemplate={ArrayTemplate}
      ObjectFieldTemplate={ObjectFieldTemplate}
      FieldTemplate={FieldTemplate}
      widgets={widgets}
      {...props}
    >
      {children}

      {!hideSubmitButton &&
      <Grid container justify="center" spacing={2}>
        <SubmitButton disabled={!dirty || isLoading} />
      </Grid>}
    </Form>
  );
}

DataForm.propTypes = {
  schema: PropTypes.object,
  uiSchema: PropTypes.object,
  createFunc: PropTypes.func,
  updateFunc: PropTypes.func,
  formData: PropTypes.object,
  onComplete: PropTypes.func,
  onChange: PropTypes.func,
  onChangeUpdate: PropTypes.func,
  children: PropTypes.element,
  hideSubmitButton: PropTypes.bool,
};
