import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import RoomIcon from '@material-ui/icons/Room';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import CalendarHeatmap from 'react-calendar-heatmap';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

import { request, asyncListAll } from 'utils/graph';
import { getUser, getContributionsByUsernameByCreatedAt } from 'graphql/queries';
import VisitButton from 'components/VisitButton';
import KeywordChip from 'components/KeywordChip';
import Colors from 'constants/Colors';
import ProjectCard from 'components/ProjectCard';
import UserAvatar from 'components/UserAvatar';
import ContributionList from './ContributionList';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    padding: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },
  listItemText: {
    marginLeft: theme.spacing(1),
  },
  itemContainer: {
    border: `1px solid ${Colors.light2}`,
    borderRadius: 5,
    padding: theme.spacing(2),
  },
  header: {
    marginTop: theme.spacing(2),
  },
}));

const today = moment().endOf('day');
const aYearAgo = moment().add(-1, 'years').startOf('day');

export default function User({ id: inId, computedMatch }) {
  const classes = useStyles();
  const { t } = useTranslation();

  const [id, setId] = useState();
  const [user, setUser] = useState();
  const [details, setDetails] = useState([]);
  const [links, setLinks] = useState([]);
  const [totalHoursInThePastYear, setTotalHoursInThePastYear] = useState(0);
  const [heatmapData, setHeatmapData] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (inId) {
      setId(inId);
    } else
    if (computedMatch) {
      const { params: { id } } = computedMatch;
      const username = localStorage.getItem('app:username');
      setId(id || username);
    }
  }, [inId, computedMatch]);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const [
        { data: { getUser: data } },
        userContributions,
      ] = await Promise.all([
        request(getUser, { username: id }),
        asyncListAll(getContributionsByUsernameByCreatedAt, {
          username: id,
          createdAt: {
            between: [
              aYearAgo.toISOString(),
              today.toISOString(),
            ],
          },
        }),
      ]);
      console.log('data', data);
      console.log('userContributions', userContributions);
      setUser(data);
      setDetails([{
        icon: <RoomIcon />,
        value: data.location,
        display: data.location ? true : false,
      }, {
        icon: <MailOutlineIcon />,
        value: data.email,
        display: true,
      }, {
        icon: <ChatBubbleOutlineIcon />,
        value: `slack: ${data.slackId || ''}`,
        display: data.slackId ? true : false,
      }].filter(({ display }) => display));
      setLinks([{
        icon: <LanguageIcon />,
        url: data.urlWebsite || '',
        color: '#000000',
      }, {
        icon: <GitHubIcon />,
        url: data.urlGithub || '',
        color: '#000000',
      }, {
        icon: <LinkedInIcon />,
        url: data.urlLinkedIn || '',
        color: 'blue',
      }, {
        icon: <FacebookIcon />,
        url: data.urlFacebook || '',
        color: '#000000',
      }, {
        icon: <TwitterIcon />,
        url: data.urlTwitter || '',
        color: '#000000',
      }, {
        icon: <InstagramIcon />,
        url: data.urlInstagram || '',
        color: '#000000',
      }]);
      setKeywords(data.keywords.items.map(({ keyword }) => keyword));
      setProjects(data.projects.items.map(({ project }) => project));

      let totalHoursInThePastYear = 0;
      const groupedContributionsMapping = userContributions.reduce((mapping, item) => {
        const date = moment(item.createdAt).format('YYYY-MM-DD');
        mapping[date] = mapping[date] || {
          date,
          count: 0,
        };
        mapping[date].count += item.hours;
        totalHoursInThePastYear += item.hours;
        return mapping;
      }, {});
      setHeatmapData(Object.keys(groupedContributionsMapping).map((key) => groupedContributionsMapping[key]));
      setContributions(userContributions);
      setTotalHoursInThePastYear(totalHoursInThePastYear);
    })();
  }, [id]);

  if (!user) return null;

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <Grid container spacing={4}>
          <Grid item xs={3} container spacing={2} style={{ height: 100 }}>
            <Grid item xs={12} align="center">
              <UserAvatar
                username={user.username}
                name={user.name}
                size={200}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h4">
                {user.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {user.username}
              </Typography>
              <Typography variant="body1">
                {user.selfIntroduction || ''}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                {t('user_editProfile')}
              </Button>
            </Grid>
            <Grid item xs={12}>
              {details.map((item, index)=>(
                <div key={index} className={classes.listItem}>
                  {item.icon}
                  <span className={classes.listItemText}>
                    {item.value}
                  </span>
                </div>
              ))}
            </Grid>
            <Grid item xs={12}>
              {links.map((link, index)=>(
                <VisitButton
                  key={index}
                  url={link.url}
                  icon={link.icon}
                  // color={link.color}
                />
              ))}
            </Grid>
            <Grid item xs={12}>
              <Button variant="outlined" fullWidth>
                {t('user_editKeywords')}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                {t('user_keywords')}
              </Typography>
              {keywords.map((item, index)=>(
                <KeywordChip key={index} data={item} size="medium" />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={9} container spacing={2}>
            <Grid item xs={4}>
              <div className={classes.itemContainer}>
                <Typography variant="body1" gutterBottom>
                  {t('user_participateProjects')}
                </Typography>
                <Typography variant="h3" gutterBottom align="center">
                  <NumberFormat
                    value={projects.length}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.itemContainer}>
                <Typography variant="body1" gutterBottom>
                  {t('user_totalCompletedHours')}
                </Typography>
                <Typography variant="h3" gutterBottom align="center">
                  <NumberFormat
                    value={user.totalCompletedHours || 0}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.itemContainer}>
                <Typography variant="body1" gutterBottom>
                  {t('user_totalCompletedTasks')}
                </Typography>
                <Typography variant="h3" gutterBottom align="center">
                  <NumberFormat
                    value={user.totalCompletedTasks || 0}
                    displayType="text"
                    thousandSeparator={true}
                  />
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom className={classes.header}>
                {t('user_totalHoursInThePastYear')}: {totalHoursInThePastYear}
              </Typography>
              {/* <div className={classes.itemContainer} style={{ paddingBottom: 0 }}> */}
              <CalendarHeatmap
                startDate={aYearAgo}
                endDate={today}
                showWeekdayLabels={true}
                monthLabels={['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map((i)=>t(`datetime_month${i}`))}
                weekdayLabels={['0', '1', '2', '3', '4', '5', '6'].map((i)=>t(`datetime_weekday${i}`))}
                values={heatmapData}
                classForValue={(value) => {
                  if (!value) {
                    return 'color-empty';
                  }
                  let scaleValue;
                  if (value.count <= 5) {
                    scaleValue = 1;
                  } else
                  if (value.count <= 10) {
                    scaleValue = 2;
                  } else
                  if (value.count <= 20) {
                    scaleValue = 3;
                  } else
                  if (value.count <= 30) {
                    scaleValue = 4;
                  } else {
                    scaleValue = 5;
                  }
                  return `color-scale-${scaleValue}`;
                }}
                tooltipDataAttrs={(value) => {
                  return {
                    'data-tip': `${value.date} has count: ${
                      value.count
                    }`,
                  };
                }}
                onClick={(v)=>console.log(v)}
              />
              {/* </div> */}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {t('user_participateProjects')}
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              {projects.map((item, index)=>(
                <Grid item xs={12} sm={3} key={index}>
                  <ProjectCard project={item} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom className={classes.header}>
                {t('user_recentContributions')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ContributionList data={contributions} max={5} />
            </Grid>
            <div style={{ flex: 1 }} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
}

User.propTypes = {
  id: PropTypes.string,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
