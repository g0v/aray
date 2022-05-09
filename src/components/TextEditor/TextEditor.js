import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { convertToRaw } from 'draft-js';
import { debounce } from 'debounce';

const defaultTheme = createTheme();

Object.assign(defaultTheme, {
  overrides: {
    MUIRichTextEditor: {
      root: {
        marginTop: 20,
        width: '100%',
      },
      editor: {
        minHeight: 64,
        borderBottom: '1px solid rgba(0,0,0,0.5)',
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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor
          label={label}
          defaultValue={defaultValue}
          onChange={handleChange}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

TextEditor.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};
