import React from 'react';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const classes = {
  content: `LandingPage-content`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`& .${classes.content}`]: {
    flex: 1,
    padding: theme.spacing(4),
    margin: theme.spacing(3),
    // height: `calc(100vh - 64px)`,
  },
}));

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <Grid className={classes.content} container alignItems="center" justifyContent="center" direction="column">
        <Box component="div" p={4}>
          {/* <img src="/logo/logo_256.png" alt="Logo" width="256" /> */}
          {t('landing_page_description')}
        </Box>
      </Grid>
    </StyledContainer>
  );
}
