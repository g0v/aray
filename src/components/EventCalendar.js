import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

function EventCalendar({ projectId }) {
  return (
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  );
}

EventCalendar.propTypes = {
  projectId: PropTypes.string,
};

export default EventCalendar;
