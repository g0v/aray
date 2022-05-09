const { v1: uuidv1 } = require('uuid');

const {
  getEvent,
  getEventAttendance,
  updateEvents,
  updateEventAttendances,
} = require('../lib/db');

module.exports = async ({
  arguments: { input },
  identity,
}) => {
  console.log({ input, identity });
  const currentUsername = identity.username;

  const {
    id: inId,
    eventId,
    username,
    status: newStatus,
    note,
  } = input;

  const [
    event,
    existingEventAttendance,
  ] = await Promise.all([
    getEvent(eventId),
    inId ? getEventAttendance(inId) : null,
  ]);

  if (!event) {
    throw new Error(`活動不存在`);
  }

  // only hosts can update status=attended
  if (!event.hosts.includes(currentUsername)) {
    if (newStatus === 'attended') {
      throw new Error(`您的權限不足，無法修改`);
    } else
    if (existingEventAttendance && (username !== currentUsername || existingEventAttendance.username !== username)) {
      throw new Error(`您的權限不足，無法修改`);
    }
  }

  // TODO: check event.rsvpOpenTime event.rsvpCloseTime

  const toUpdateEvents = [];
  const id = inId || uuidv1();
  const now = new Date().toISOString();

  const eventAttendance = existingEventAttendance || {
    __typename: 'EventAttendance',
    id,
    username,
    note,
    createdAt: now,
    updatedAt: now,
    createdBy: currentUsername,
    updatedBy: currentUsername,
  };

  const currentAttendanceCount = event.attendanceCount;
  const currentStatus = eventAttendance.status;

  switch (currentStatus) {
  case 'pending':
    if (newStatus === 'attending') {
      event.attendanceCount++;
    }
    break;
  case 'attending':
    if (newStatus === 'notAttended') {
      event.attendanceCount--;
    }
    break;
  case 'attended':
    if (newStatus === 'notAttended') {
      event.attendanceCount--;
    }
    break;
  case 'notAttended':
    if (newStatus === 'attending') {
      event.attendanceCount++;
    }
    break;
  default:
    if (newStatus === 'attending') {
      event.attendanceCount++;
    }
  }

  eventAttendance.status = newStatus;
  eventAttendance.updatedAt = now;
  eventAttendance.updatedBy = currentUsername;

  if (currentAttendanceCount !== event.attendanceCount) {
    event.updatedAt = now;
    event.updatedBy = 'System';
    toUpdateEvents.push(event);
  }

  await Promise.all([
    updateEvents(toUpdateEvents),
    updateEventAttendances([eventAttendance]),
  ]);

  return {
    id,
  };
};
