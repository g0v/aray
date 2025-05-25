import React, { useState, useEffect } from 'react';
import EventCard from 'components/EventCard/EventCard';
import { Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import DataJoinEditorInput from 'components/DataJoinEditor/DataJoinEditorInput';
import { request } from 'utils/graph';
import { listEvents } from 'graphql/queries';
import { sortBy } from 'utils/sorting';
import { use } from 'react';

export default function EventList() {
  // Sample event data
  const [events, setEvents] = useState([]);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleFilter = (key) => (values) => {};
  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const response = await request(listEvents, { limit: 1000 });
      return response.data.listEvents.items || [];
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };
    loadEvents();
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      const sortedEvents = [...events].sort(sortBy('startDate', true));
      setSortedEvents(sortedEvents);
    }
  }, [events]);
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
            {/* <DataJoinEditorInput
              title="Search by Title"
              mode={''}
              joinData={[]}
              defaultValues={[]}
              onChange={handleFilter('categorys')}
              onUpdateOptions={() => {}}
              disabled={isLoading}
              showHelperText={false}
            /> */}
          </Grid>
          {/* Add more filters as needed */}
        </Grid>
      </Card>
      <Grid container spacing={2}>
        {sortedEvents.map((event, index) => (
          <Grid item md={12} key={index}>
            <EventCard event={event}></EventCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
