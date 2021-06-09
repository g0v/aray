import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { convertToRaw } from 'draft-js';
import { debounce } from 'debounce';

const defaultTheme = createMuiTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: '100%',
      },
      editor: {
        minHeight: 64,
        borderBottom: '1px solid gray',
      },
    },
  },
});

export default function TextEditor({
  label,
  defaultValue,
  onChange,
}) {
  const handleChange = debounce((event) => {
    const content = JSON.stringify(convertToRaw(event.getCurrentContent()));
    onChange(content);
  }, 500);

  return (
    <MuiThemeProvider theme={defaultTheme}>
      <MUIRichTextEditor
        label={label}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
    </MuiThemeProvider>
  );
}

TextEditor.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
