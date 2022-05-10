import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
// import RoomIcon from '@mui/icons-material/Room';
import Icon from '@mui/material/Icon';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import { useTranslation } from 'react-i18next';

import { request, asyncListAll } from 'utils/graph';
import {
  getUser,
  getContributionsByUsernameByCreatedAt,
  getStatementsByUsernameByDate,
} from 'graphql/queries';
import VisitButton from 'components/VisitButton';
import TagChip from 'components/TagChip';
import NeedChip from 'components/NeedChip';
import ProjectCard from 'components/ProjectCard';
import UserAvatar from 'components/UserAvatar';
import StatsCard from 'components/StatsCard';
import ContributionList from './ContributionList';
import UserEditButton from 'forms/UserForm/UserEditButton';
import DataJoinEditor from 'components/DataJoinEditor';
import ContributionHeatmap from './ContributionHeatmap';
import RichText from 'components/RichText';
import Loading from 'components/Loading';
import Button from '@mui/material/Button';
import ReactToPrint from 'react-to-print';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
const PREFIX = 'User';

const classes = {
  container: `${PREFIX}-container`,
  card: `${PREFIX}-card`,
  listItem: `${PREFIX}-listItem`,
  listItemText: `${PREFIX}-listItemText`,
  header: `${PREFIX}-header`,
  certification: `${PREFIX}-certification`,
  g0vOnly: `${PREFIX}-g0vOnly`,
};

const StyledContainer = styled(Container)(({ theme }) => ({
  [`&.${classes.container}`]: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginTop: theme.spacing(8),
  },

  [`& .${classes.card}`]: {
    padding: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },

  [`& .${classes.listItem}`]: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(1),
  },

  [`& .${classes.listItemText}`]: {
    marginLeft: theme.spacing(1),
  },

  [`& .${classes.header}`]: {
    marginTop: theme.spacing(2),
  },

  [`& .${classes.certification}`]: {
    '& h2': {
      textAlign: 'center',
      height: '2rem',
      verticalAlign: 'middle',
    },
    '& div': {
      textAlign: 'center',
    },
    'textAlign': 'center',
    'fontSize': '0.8rem',
    'padding': '5mm',
    'margin': '2mm',
  },

  [`& .${classes.g0vOnly}`]: {
    height: '2rem',
    verticalAlign: 'middle',
    marginLeft: '0.2rem',
    marginBottom: '0.2rem',
  },
}));

const todayFromBeginning = moment().startOf('day');
const today = moment().endOf('day');
const aYearAgo = moment().add(-1, 'years').startOf('day');

export default function User({ id: inId, computedMatch, match }) {
  const componentRef = useRef();

  const { t } = useTranslation();

  const [id, setId] = useState();
  const [user, setUser] = useState();
  const [details, setDetails] = useState([]);
  const [links, setLinks] = useState([]);
  const [totalHoursInThePastYear, setTotalHoursInThePastYear] = useState(0);
  const [heatmapData, setHeatmapData] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [tags, setTags] = useState([]);
  const [userProjects, setUserProjects] = useState([]);
  const [needs, setNeeds] = useState([]);
  const [canEdit, setCanEdit] = useState(false);
  const [lastUpdatedAt, setLastUpdatedAt] = useState(Date.now());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (inId) {
      setId(inId);
    } else
    if (computedMatch || match) {
      const { params: { id } } = computedMatch || match;
      const username = localStorage.getItem('app:username');
      setId(id || username);
    }
  }, [inId, computedMatch, match]);

  useEffect(() => {
    if (!id) return;
    const username = localStorage.getItem('app:username');
    setCanEdit(username === id);

    (async () => {
      const [
        { data: { getUser: data } },
        { data: { getContributionsByUsernameByCreatedAt: { items: userContributions } } },
        todayContributions,
        userStatements,
      ] = await Promise.all([
        request(getUser, { username: id }),
        request(getContributionsByUsernameByCreatedAt, {
          username: id,
          createdAt: {
            between: [
              aYearAgo.toISOString(),
              today.toISOString(),
            ],
          },
          limit: 5,
          sortDirection: 'DESC',
        }),
        asyncListAll(getContributionsByUsernameByCreatedAt, {
          username: id,
          createdAt: {
            between: [
              todayFromBeginning.toISOString(),
              today.toISOString(),
            ],
          },
          limit: 1000,
          sortDirection: 'DESC',
        }),
        asyncListAll(getStatementsByUsernameByDate, {
          username: id,
          createdAt: {
            between: [
              aYearAgo.toISOString(),
              today.toISOString(),
            ],
          },
          sortDirection: 'DESC',
          limit: 500,
        }),
      ]);

      console.log('data', data);
      console.log('userContributions', userContributions);
      console.log('userStatements', userStatements);

      if (!data) return;

      setUser(data);
      setDetails([{
        icon: <Icon className="fas fa-map-marker-alt" />,
        value: data.location,
        display: data.location ? true : false,
        // TODO: Do not return email in response
        // }, {
        //   icon: <MailOutlineIcon />,
        //   value: data.email,
        //   display: true,
      }, {
        icon: <Icon className="fab fa-slack" />,
        value: `${data.slackId || ''}`,
        link: data.slackIdUrl,
        display: data.slackId ? true : false,
      }].filter(({ display }) => display));
      setLinks([{
        icon: <LanguageIcon />,
        url: data.urlWebsite || '',
        color: 'default',
      }, {
        icon: <GitHubIcon/>,
        url: data.urlGithub || '',
        color: 'default',
      }, {
        icon: <LinkedInIcon />,
        url: data.urlLinkedIn || '',
        color: 'default',
      }, {
        icon: <FacebookIcon />,
        url: data.urlFacebook || '',
        color: 'default',
      }, {
        icon: <TwitterIcon />,
        url: data.urlTwitter || '',
        color: 'default',
      }, {
        icon: <InstagramIcon />,
        url: data.urlInstagram || '',
        color: 'default',
      }].filter(({ url }) => url !== ''));

      const projects = data.projects.items.map(({ project }) => project);
      setTags(data.tags.items.map(({ tag }) => tag));
      setUserProjects(data.projects.items);
      setNeeds(data.needs.items.map(({ need }) => need));

      let totalHoursInThePastYear = 0;
      const heatmapData = userStatements.map(({ date, completedHours }) => {
        if (date === today.format('YYYY-MM-DD')) {
          completedHours += todayContributions.reduce((sum, { hours }) => {
            return sum + hours;
          }, 0);
        }

        totalHoursInThePastYear += completedHours;

        return {
          date,
          count: completedHours,
        };
      });

      setHeatmapData(heatmapData);
      setContributions(userContributions.map((item) => {
        item.project = projects.find(({ id }) => id === item.projectId);
        return item;
      }));
      setTotalHoursInThePastYear(totalHoursInThePastYear);
    })();
  }, [id, lastUpdatedAt]);

  if (!user) {
    return <Loading fullScreen={false} />;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formatDate = (date) => date.substring(0, 10);

  return (
    <StyledContainer className={classes.container}>
      <Dialog open={open}>
        <Card variant="outlined" ref={componentRef} className={classes.certification}>
          <div>
            <img src="/assets/images/pring-logo.png"/>
          </div>
          <p>
            Congratulation to {user.name} for contributing {userProjects.length} project,
            to finshed {user.totalCompletedTasks} missions in {user.totalCompletedHours} hours.<br/>
            <br/>
            You are the best!......Hooray!!!!!
          </p>
          <h2>
          Contribution Summarize
          </h2>
          Contributed Projects {userProjects.length}, Total Contributed Hours {user.totalCompletedHours},
          Total Completed Tasks {user.totalCompletedTasks}

          <Table>
            <TableBody>
              {userProjects.map((up)=>(
                <TableRow key={up.project.name}>
                  <TableCell style={{ borderBottom: 'none' }}>{up.project.name}</TableCell>
                  <TableCell style={{ borderBottom: 'none' }}>{up.completedTasks} Missions,
                    {up.completedHours} Hours from {formatDate(up.project.createdAt)} to {formatDate(up.project.updatedAt)}.</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h2>POWERED BY <img className={classes.g0vOnly} src="/assets/images/g0v-only.svg"/></h2>
          {new Date().getFullYear()}&sdot;{new Date().getMonth()+1}&sdot;{new Date().getDate()}
        </Card>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <ReactToPrint
            trigger={() => <Button onClick={handleClose}>Print</Button>}
            content={() => componentRef.current}
          />
        </DialogActions>
      </Dialog>

      <Card className={classes.card}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} align="center">
                <UserAvatar
                  username={user.username}
                  name={user.name}
                  size={150}
                  showEditor={true}
                  canEdit={canEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h4">
                  {user.name}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                  {user.username}
                </Typography>
                <RichText data={user.selfIntroduction} />
              </Grid>
              {canEdit &&
              <Grid item xs={12}>
                <UserEditButton
                  mode={'edit'}
                  item={user}
                  onUpdate={() => setLastUpdatedAt(Date.now())}
                />
              </Grid>}
              <Grid item xs={12}>
                <Button fullWidth={true} size='small' variant='outlined' onClick={handleClickOpen}>Certification</Button>
              </Grid>
              <Grid item xs={12}>
                {details.map((item, index)=>(
                  <div key={index} className={classes.listItem}>
                    {item.icon}
                    <span className={classes.listItemText}>
                      {item.link ?
                        <VisitButton
                          title={`@${(item.value || '').replace('@', '')}`}
                          url={item.link}
                          variant={'text'}
                          color={'secondary'}
                          style={{ padding: 0, minWidth: 0, textTransform: 'none', fontSize: 14 }}
                        /> : item.value
                      }
                    </span>
                  </div>
                ))}
              </Grid>
              {links.length > 0 &&
              <Grid item xs={12}>
                {links.map((link, index)=>(
                  <VisitButton
                    key={index}
                    url={link.url}
                    icon={link.icon}
                    color={link.color}
                  />
                ))}
              </Grid>}
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('user_tags')}
                  {canEdit &&
                  <DataJoinEditor
                    title={t('user_tags')}
                    mode={'user-tag'}
                    joinData={user.tags.items}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                {tags.map((item, index)=>(
                  <TagChip key={index} data={item} target="user" />
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" gutterBottom>
                  {t('user_needs')}
                  {canEdit &&
                  <DataJoinEditor
                    title={t('user_needs')}
                    mode={'user-need'}
                    joinData={user.needs.items}
                    onUpdate={() => setLastUpdatedAt(Date.now())}
                  />}
                </Typography>
                {needs.map((item, index)=>(
                  <NeedChip key={index} data={item} target="user" />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} container spacing={2}>
            <Grid item xs={12} sm={4}>
              <StatsCard
                label={t('user_participateProjects')}
                value={userProjects.length} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatsCard
                label={t('user_totalCompletedHours')}
                value={user.totalCompletedHours} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatsCard
                label={t('user_totalCompletedTasks')}
                value={user.totalCompletedTasks} />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom className={classes.header}>
                {t('user_totalHoursInThePastYear')}:&nbsp;
                <NumberFormat
                  value={totalHoursInThePastYear}
                  displayType="text"
                  thousandSeparator={true}
                />&nbsp;
                {t('user_hours')}
              </Typography>
              <ContributionHeatmap
                startDate={aYearAgo}
                endDate={today}
                values={heatmapData}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {t('user_participateProjects')}
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              {userProjects.map((item, index)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ProjectCard
                    userProject={item}
                    variant="outlined"
                    hideSummary={true}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom className={classes.header}>
                {t('user_recentContributions')}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <ContributionList
                data={contributions}
                max={5}
              />
            </Grid>
            <div style={{ flex: 1 }} />
          </Grid>
        </Grid>
      </Card>
    </StyledContainer>
  );
}

User.propTypes = {
  id: PropTypes.string,
  computedMatch: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};
