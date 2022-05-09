import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import TabPanel from 'components/Tab/TabPanel';

const PREFIX = 'VerticalTabs';

const classes = {
  root: `${PREFIX}-root`,
  tabs: `${PREFIX}-tabs`,
  panels: `${PREFIX}-panels`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    flex: 1,
    display: 'flex',
    // backgroundColor: Colors.background.light,
  },

  [`& .${classes.tabs}`]: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(2),
    minWidth: 160,
  },

  [`& .${classes.panels}`]: {
    flex: 1,
  }
}));

export {};

export default function VerticalTabs({
  tabs = [],
  isNested = false,
  defaultTabIndex = 0,
  padding = 16,
}) {

  const history = useHistory();

  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleChangeTab = (e, newValue) => {
    setTabIndex(newValue);

    if (!isNested) {
      const tabName = tabs[newValue].label.replace('&', ' ');
      history.push({
        search: `?tab=${tabName}`,
      });
    }
  };

  useEffect(() => {
    if (!tabs || tabs.length === 0 || isNested) return;

    const { tab } = querystring.parse(window.location.search);
    if (tab) {
      const tabIndex = !isNaN(tab) ? parseInt(tab) : tabs.findIndex(({ label }) => label.replace('&', ' ') === tab);
      setTabIndex(tabIndex);
    }
  }, [isNested, tabs]);

  return (
    <Root className={classes.root} style={{ padding }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={tabIndex}
        onChange={handleChangeTab}
        className={classes.tabs}
      >
        {tabs.map(({ label }, index) => (
          <Tab key={index} label={label} />
        ))}
      </Tabs>
      {tabs.map(({ component }, index)=>(
        <TabPanel key={index} value={tabIndex} index={index} className={classes.panels}>
          {component}
        </TabPanel>
      ))}
    </Root>
  );
}

VerticalTabs.propTypes = {
  tabs: PropTypes.array,
  isNested: PropTypes.bool,
  defaultTabIndex: PropTypes.number,
  padding: PropTypes.number,
};
