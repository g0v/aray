import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouteLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({}));

export default function EventCard({ event }) {
  const classes = useStyles();
  const { t } = useTranslation();

  if (!event) return null;
  return (
    <Link
      to={`/events/${event.id}`}
      component={RouteLink}
      style={{
        textDecoration: 'none',
        height: '100%',
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h3" color="textSecondary" component="h3">
            {event.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.startDate} ~ {event.endDate}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.attendanceCount} / {event.guestLimit}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.hosts}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {event.link}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

/**
 * data sample
 * {
    "attendanceCount": 112,
    "createdAt": "2025-04-13T16:25:43.835Z",
    "description": "g0v 第伍拾次來電五十黑客松 x COSCUP 將在 2022.06.18（六）於升級會議中心-松江 101 館舉辦，歡迎公民、鄉民、憤青等諸眾，帶著熱血來盡一己之力，開源協作參與社會。",
    "endDate": "2022-06-18T09:00:00.000Z",
    "guestLimit": 135,
    "hosts": null,
    "id": "c36a2384-468f-4413-b7c2-150c145507c1",
    "link": "https://g0v-jothon.kktix.cc/events/g0v-hackath50n",
    "location": "{address=台北市中山區松江路101號4樓, name=升級會議中心-松江101館}",
    "name": "g0v hackath50n | 台灣零時政府第伍拾次來電五十黑客松 x COSCUP Open Source Contributor Workshop",
    "projectId": "70e932c0-cb50-40f9-aba0-ced935f2d5de",
    "startDate": "2022-06-18T01:30:00.000Z",
    "type": "實體活動",
    "updatedAt": "2025-04-13T16:25:43.835Z"
}
 */
EventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.string.isRequired,
    projectId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    attendanceCount: PropTypes.number.isRequired,
    guestLimit: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    hosts: PropTypes.string,
  }).isRequired,
};
