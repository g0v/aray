const fs = require("node:fs");
const crypto = require("node:crypto");
const schema = require("./schema.json");
const arayProjects = require("../data/scripts/aray-projects.json");
const { parseFromString } = require("dom-parser");

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
  return await events.entry.map(async (event) => {
    const { title, description, published, url, content } = event;
    // const { eventTime, location, attendance } = await kktixpage(url);
    const { eventTime, location } = parseContent(content);
    return {
      ...schema,
      id: crypto.randomUUID(),
      name: title,
      projectId: arayProjects[0].id,
      type: location === "Online Event" ? "線上活動" : "實體活動",
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

/**
 * data: 時間：2025/02/22 09:30(+0800)~17:30\n地點：National Taiwan University Innovation Hall (SPACE M) (國立臺灣大學 學新館 SPACE M) / 2F, No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City (台北市大安區舟山路10巷1弄4號)
 * output: { eventTime: { start: "2025-02-22T09:30:00.000Z", end: "2025-02-22T17:30:00.000Z" }, location: { name: "National Taiwan University Innovation Hall (SPACE M)", address: "2F, No. 1, Section 4, Roosevelt Rd, Da’an District, Taipei City" }}
 */
function parseContent(content) {
  const [time, location] = content.split("\n");
  const eventTime = parseEventTime(time);
  const eventLocation = parseLocation(location);
  return { eventTime, eventLocation };
}

async function kktixpage(url) {
  console.log("url", url);
  const pageResponse = await fetch(url);

  console.log("pageResponse", pageResponse);
  if (pageResponse.ok) {
    console.log(pageResponse.headers.get("url"));
    const page = await pageResponse.text();
    const doc = parseFromString(page);
    console.log(doc);
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
 * time string: 時間：2025/01/04 13:00(+0800)~17:00 to start time yyyy-MM-dd'T'HH:mm:ss.SSS'Z' and end time yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
 */
function parseEventTime(time) {
  time = time.replace("時間：", "");
  const [start, end] = time.split("~");
  const [startDate, startTime] = start.split(" ");
  const [startHour] = startTime.split("(");
  return {
    start: new Date(startDate + " " + startHour).toISOString(),
    end: new Date(startDate + " " + end).toISOString(),
  };
}

/**
 * parse location object
 * location string: 地點：台北 NPO 聚落 / 台北市中正區重慶南路三段2號 to { name: "台北 NPO 聚落", address: "台北市中正區重慶南路三段2號" }
 */
function parseLocation(location) {
  console.log("location", location);
  if (!location) {
    return { name: "", address: "" };
  }
  if (location === "Online Event")
    return { name: "Online Event", address: "Online Event" };

  location = location.replace("地點：", "");
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

// fs.writeFile(
//   "./data/scripts/aray-events.json",
//   JSON.stringify(await arayEvents(schema)),
//   () => {}
// );
arayEvents(schema);
console.log(arayEvents(schema));
