const { fs } = require("node:fs");
const crypto = require("node:crypto");
const schema = require("./schema.json");
const arayProjects = require("../data/scripts/aray-projects.json");

const events = require("./kktix-events.json");

async function arayEvents(json) {
  const ignoreKey = [
    "createdAt",
    "createdBy",
    "updatedAt",
    "updatedBy",
    "rsvpQuestion",
    "rsvpLimit",
    "rsvpOpenTime",
    "rsvpCloseTime",
  ];
  const schemaName = "Event";
  let schema = json.data.__schema.types
    .filter((types) => types.kind === "OBJECT" && types.name === schemaName)[0]
    .fields.reduce(
      (pre, cv) =>
        (pre +=
          cv.type.kind === "NON_NULL" && !ignoreKey.includes(cv.name)
            ? `${pre ? "," : ""}"${cv.name}":""`
            : ""),
      ""
    );
  schema = JSON.parse("{" + schema + "}");

  console.log({ ...schema });
  return events.entry.map(async (event) => {
    const { title, description, published, url } = event;
    const { eventTime, location, attendance } = await kktixpage(url);

    return {
      ...schema,
      id: crypto.randomUUID(),
      name: title,
      projectId: arayProjects[0].id,
      type: "實體活動",
      location: location.address,
      link: url,
      description,
      startDate: eventTime.start,
      endDate: eventTime.end,
      attendanceCount: attendance.current,
      guestLimit: attendance.limit,
    };
  });
}

async function kktixpage(url) {
  const pageResponse = await fetch(url);
  if (pageResponse.ok) {
    const page = await pageResponse.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(page, "text/html");

    const eventTime =
      doc.getElementsByClassName("timezoneSuffix")[0].textContent +
      "~" +
      doc.getElementsByClassName("timezoneSuffix")[1].textContent;
    const location = doc.getElementsByClassName("info-desc")[1];
    const attendance = doc.getElementsByClassName("info-count")[0];
    const host = doc.getElementsByClassName("info-org")[0];

    return {
      eventTime: parseEventTime(eventTime),
      location: parseLocation(trispace(location)),
      attendance: parseAttentence(trispace(attendance)),
      link,
      host,
    };
  }
}

/**
 * '\n                  \n                  台北 NPO 聚落 / 台北市中正區重慶南路三段2號\n  to 台北 NPO 聚落 / 台北市中正區重慶南路三段2號
 */
function trispace(str) {
  return str.replace(/\n\s+/g, "");
}

/**
 * parse event time
 * time string: 2025/01/04(周六) 13:00(+0800)~17:00(+0800) to start time yyyy-MM-dd'T'HH:mm:ss.SSS'Z' and end time yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
 */
function parseEventTime(time) {
  const [start, end] = time.split("~");
  const [startDate, startTime] = start.split(" ");
  const [startHour] = startTime.split(":");
  const [endHour] = end.split(":");
  const date = startDate.split("(")[0];
  return {
    start: new Date(date + " " + startHour + ":00").toISOString(),
    end: new Date(date + " " + endHour + ":00").toISOString(),
  };
}

/**
 * parse location object
 * location string: 台北 NPO 聚落 / 台北市中正區重慶南路三段2號 to { name: "台北 NPO 聚落", address: "台北市中正區重慶南路三段2號" }
 */
function parseLocation(location) {
  const [name, address] = location.split(" / ");
  return { name, address };
}

/**
 * parse attentence
 * attentence string: 10 / 100 to { current: 10, limit: 100 }
 */
function parseAttentence(attentence) {
  const [current, limit] = attentence.split(" / ");
  return { current, limit };
}

await fs.writeFile(
  "./data/scripts/aray-events.json",
  JSON.stringify(arayEvents(schema)),
  () => {}
);

console.log(arayEvents(schema));
