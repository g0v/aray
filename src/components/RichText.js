import React from 'react';
import PropTypes from 'prop-types';
import MUIRichTextEditor from 'mui-rte';

export default function RichText({ data = '' }) {
  return (
    <MUIRichTextEditor
      defaultValue={data}
      controls={[]}
      readOnly={true}
    />
  );
}

RichText.propTypes = {
  data: PropTypes.string,
};
