import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: 1,
    padding: theme.spacing(4),
    // height: `calc(100vh - 64px)`,
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container>
      <Grid className={classes.content} container alignItems="center" justify="center" direction="column">
        <Box component="div" p={4}>
          {/* <img src="/logo/logo_256.png" alt="Logo" width="256" /> */}
          {t('landing_page_description')}
        </Box>
      </Grid>
    </Container>
  );
}
