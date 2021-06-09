import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import TextEditor from 'components/TextEditor';

const useStyles = makeStyles((theme) => ({
  content: {
    flex: 1,
    padding: theme.spacing(4),
    // height: `calc(100vh - 64px)`,
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Container>
      <Grid className={classes.content} container alignItems="center" justify="center" direction="column">
        <Box component="div" p={4}>
          {/* <img src="/logo/logo_256.png" alt="Logo" width="256" /> */}
          零時小學校在今年預計將與 g0ver @John Huang 和日本 Code for Japan、韓國 Code for Korea 合作「時數系統」專案，讓零時小學校的營隊學生和專案參與者，都可以將上課或貢獻專案的時數登錄在系統上，並可輸出時數證明，讓你在社群的貢獻可以被看見。
          「時數系統」專案第一階段將開放零時小學校和合作社群的學生使用，第二階段會再開放 g0v 所有坑主加入，也就是坑主以後都可以加入這個系統，協助坑內成員做時數認證或其他貢獻的串連。
        </Box>
        <TextEditor />
      </Grid>
    </Container>
  );
}
