import React, { useState, useEffect } from 'react';
import EventCard from 'components/EventCard/EventCard';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';

export default function EventList() {
  // Sample event data
  const [events, setEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleFilter = (key) => (values) => {};
  useEffect(() => {
    setIsLoading(true);
    setEvents([
      {
        annouceToContributors: false,
        attendanceCount: 112,
        createdAt: '2025-04-13T16:25:43.835Z',
        createdBy: 'SEED',
        description:
          'g0v 第伍拾次來電五十黑客松 x COSCUP 將在 2022.06.18（六）於升級會議中心-松江 101 館舉辦，歡迎公民、鄉民、憤青等諸眾，帶著熱血來盡一己之力，開源協作參與社會。',
        duration: 3600000,
        endDate: '2022-06-18T09:00:00.000Z',
        guestLimit: 135,
        hosts: null,
        id: 'c36a2384-468f-4413-b7c2-150c145507c1',
        link: 'https://g0v-jothon.kktix.cc/events/g0v-hackath50n',
        location:
          '{address=台北市中山區松江路101號4樓, name=升級會議中心-松江101館}',
        name: 'g0v hackath50n | 台灣零時政府第伍拾次來電五十黑客松 x COSCUP Open Source Contributor Workshop',
        projectId: '70e932c0-cb50-40f9-aba0-ced935f2d5de',
        rsvpCloseTime: '2022-06-18T01:30:00.000Z',
        rsvpLimit: 0,
        rsvpOpenTime: '2022-06-18T01:30:00.000Z',
        rsvpQuestion: '無',
        startDate: '2022-06-18T01:30:00.000Z',
        type: '實體活動',
        updatedAt: '2025-04-13T16:25:43.835Z',
        updatedBy: 'SEED',
      },
      {
        annouceToContributors: false,
        attendanceCount: 110,
        createdAt: '2025-04-13T16:25:43.835Z',
        createdBy: 'SEED',
        description:
          '☞ 為何要來 g0v.tw 每兩個月一回合黑客松，打造各式資訊透明化平台，從資料透明開始，用科技工具與開源協作參與社會。 ☞ 來者何人 歡迎開發者、設計者、社會運動工作者、法律專家、文字工作者、插',
        duration: 3600000,
        endDate: '2014-06-21T10:00:00.000Z',
        guestLimit: 120,
        hosts: null,
        id: '6ec26d6b-5e9e-4499-93d0-4a76c05dc509',
        link: 'https://g0v-tw.kktix.cc/events/g0v-hackath9n',
        location:
          '{address=台北市南港區研究院路二段128號, name=中央研究院資訊科學所}',
        name: 'g0v.tw hackath9n | 台灣零時政府第玖次還我土地黑客松',
        projectId: '70e932c0-cb50-40f9-aba0-ced935f2d5de',
        rsvpCloseTime: '2014-06-21T01:00:00.000Z',
        rsvpLimit: 0,
        rsvpOpenTime: '2014-06-21T01:00:00.000Z',
        rsvpQuestion: '無',
        startDate: '2014-06-21T01:00:00.000Z',
        type: '實體活動',
        updatedAt: '2025-04-13T16:25:43.835Z',
        updatedBy: 'SEED',
      },
    ]);
    setIsLoading(false);
  }, []);
  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Card style={{ padding: 16, marginTop: 16, marginBottom: 16 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              style={{ marginTop: 16 }}
            >
              Event List
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <DataJoinEditorInput
              title="Search by Title"
              mode={''}
              joinData={[]}
              defaultValues={[]}
              onChange={handleFilter('categorys')}
              onUpdateOptions={() => {}}
              disabled={isLoading}
              showHelperText={false}
            />
          </Grid>
          {/* Add more filters as needed */}
        </Grid>
      </Card>
      <Grid container spacing={2}>
        {events.map((event, index) => (
          <Grid item md={12} key={index}>
            <EventCard event={event}></EventCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
