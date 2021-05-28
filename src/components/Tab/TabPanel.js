import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

export default function TabPanel(props) {
  const { children, value, index, p = 0, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={p}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number,
  index: PropTypes.number,
  p: PropTypes.number,
};
