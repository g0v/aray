import React from 'react';
import EventCard from 'components/EventCard/EventCard';

export default function EventList() {
  // Sample event data
  const event = {
    title: 'Sample Event',
    description: 'This is a sample event description.',
    date: '2023-10-01T12:00:00Z',
    location: 'Sample Location',
  };
  return (
    <div className="">
      <h1>Event List</h1>
      <EventCard event={event}></EventCard>
    </div>
  );
}
