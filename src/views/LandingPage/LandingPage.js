import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: 1,
    padding: theme.spacing(4),
    // height: `calc(100vh - 64px)`,
  },
  button: {
    padding: theme.spacing(6),
  },
}));

export default function LandingPage() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Container>
      <Grid className={classes.content} container>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Button size="large" variant="contained" color="secondary" className={classes.button} to={'/projects'} component={Link}>
            {t('title_projectList')}
          </Button>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Button size="large" variant="contained" color="secondary" className={classes.button} to={'/users'} component={Link}>
            {t('title_userList')}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
