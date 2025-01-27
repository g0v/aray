const fs = require('node:fs');
const crypto = require('node:crypto');
const schema = require('./schema.json');
const arayProjects = require('../data/scripts/aray-projects.json');
const { kktixpage } = require('./event-kktix');
const events = require('./kktix-events.json');
const oldEvents = require('./g0v.tw-old-kktix-events.json');
async function arayEvents(json) {
  const ignoreKey = [
    'createdAt',
    'createdBy',
    'updatedAt',
    'updatedBy',
    'rsvpQuestion',
    'rsvpLimit',
    'rsvpOpenTime',
    'rsvpCloseTime',
    'duration',
  ];
  const schemaName = 'Event';
  let schema = json.data.__schema.types
    .filter((types) => types.kind === 'OBJECT' && types.name === schemaName)[0]
    .fields.reduce(
      (pre, cv) =>
        (pre +=
          cv.type.kind === 'NON_NULL' && !ignoreKey.includes(cv.name) ? `${pre ? ',' : ''}"${cv.name}":""` : ''),
      '',
    );
  schema = JSON.parse(('{' + schema + '}').toString());
  const entry = [...events.entry, ...oldEvents.entry];
  return await Promise.all( entry.map(async (event) => {
    await sleep(5000);
    console.log('=============');
    console.log('event: ', event);
    const { title, summary, url, content } = event;
    const { attendance } = await kktixpage(url);
    const { eventTime, eventLocation } = parseContent(content);
    console.log(eventTime, eventLocation);
    return await {
      ...schema,
      id: crypto.randomUUID(),
      name: title,
      projectId: arayProjects[0].id,
      type: eventLocation.name === 'Online Event' ? '線上活動' : '實體活動',
      location: eventLocation,
      link: url,
      description: summary,
      startDate: eventTime.start,
      endDate: eventTime.end,
      attendanceCount: attendance.current,
      guestLimit: attendance.limit,
      annouceToContributors: false,
    };
  }));
}

/**
 * data: 時間：2025/02/22 09:30(+0800)~17:30\n
 * 地點：National Taiwan University Innovation Hall (SPACE M)
 * (國立臺灣大學 學新館 SPACE M) / 2F, No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City (台北市大安區舟山路10巷1弄4號)
 * @param {string} content
 * output: { eventTime: { start: '2025-02-22T09:30:00.000Z', end: '2025-02-22T17:30:00.000Z' },
 * location: { name: 'National Taiwan University Innovation Hall (SPACE M)',
 * address: '2F, No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City' }}
 * @return {string} content
 */
function parseContent(content) {
  const [time, location] = content.split('\n');
  const eventTime = parseEventTime(time);
  const eventLocation = parseLocation(location);
  return { eventTime, eventLocation };
}

/**
 * parse event time
 * format 1: 時間：2025/02/22 09:30(+0800)~17:30
 * format 2: 時間：2024/07/06 10:00(+0800) ~ 2024/08/24 17:00(+0800)
 * @param {string} time
 * @return {string} time string: 時間：2025/01/04 13:00(+0800)~17:00 to start time yyyy-MM-dd'T'HH:mm:ss.SSS'Z' and end time yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
 */
function parseEventTime(time) {
  time = time.replace('時間：', '');
  const regex1 = /\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}\(\+\d{4}\)~\d{2}:\d{2}/;
  const regex2 = /\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}\(\+\d{4}\) ~ \d{4}\/\d{2}\/\d{2} \d{2}:\d{2}\(\+\d{4}\)/;
  if (!regex1.test(time) && !regex2.test(time)) {
    return { start: '', end: '' };
  } else if (regex1.test(time)) {
    const [start, end] = time.split('~');
    const [startDate, startTime] = start.split(' ');
    const [startHour] = startTime.split('(');
    console.log('startDate:', startDate + ' ' + startHour, 'endDate:', startDate + ' ' + end);
    return {
      start: new Date(startDate + ' ' + startHour).toISOString(),
      end: new Date(startDate + ' ' + end).toISOString(),
    };
  } else if (regex2.test(time)) {
    const [start, end] = time.split(' ~ ');
    const [startDate, startTime] = start.split(' ');
    const [startHour] = startTime.split('(');
    const [endDate, endTime] = end.split(' ');
    const [endHour] = endTime.split('(');
    console.log('startDate:', startDate + ' ' + startHour, 'endDate:', endDate + ' ' + endHour);
    return {
      start: new Date(startDate + ' ' + startHour).toISOString(),
      end: new Date(endDate + ' ' + endHour).toISOString(),
    };
  }
}

/**
 * parse location object
 * @param {string} location
 * @return {string} location string: 地點：台北 NPO 聚落 / 台北市中正區重慶南路三段2號 to { name: '台北 NPO 聚落', address: '台北市中正區重慶南路三段2號' }
 */
function parseLocation(location) {
  console.log('location', location);
  if (!location) {
    return { name: '', address: '' };
  }
  if (location === 'Online Event') {
    return { name: 'Online Event', address: 'Online Event' };
  }
  const [name, address] = location.replace('地點：', '').split(' / ');
  return { name, address: address || '' };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async function() {
  const events = arayEvents(schema);
  console.log(events);
  events.then((data) => {
    console.log(data);
    fs.writeFileSync(
      './data/scripts/aray-events.json',
      JSON.stringify(data),
      () => {},
    );
  });
})();

// arayEvents(schema);
