import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import querystring from 'query-string';

import TabPanel from 'components/Tab/TabPanel';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    display: 'flex',
    // backgroundColor: Colors.background.light,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(2),
    minWidth: 160,
  },
  panels: {
    flex: 1,
  },
}));

export default function VerticalTabs({
  tabs = [],
  isNested = false,
  defaultTabIndex = 0,
  padding = 16,
}) {
  const classes = useStyles();
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
    <div className={classes.root} style={{ padding }}>
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
    </div>
  );
}

VerticalTabs.propTypes = {
  tabs: PropTypes.array,
  isNested: PropTypes.bool,
  defaultTabIndex: PropTypes.number,
  padding: PropTypes.number,
};
