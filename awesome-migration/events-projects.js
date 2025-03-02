const fs = require('node:fs');
const crypto = require('node:crypto');
const events = require('../data/scripts/aray-events.json');
const projects = require('../data/scripts/aray-projects.json');
const g0vDB = require('./g0vDb.json');
const awesomeProjects = require('./projects.json');
const moment = require('moment');
const users = require('../data/scripts/aray-users.json');
const { get } = require('node:http');

/**
 * 這個檔案是用來處理每次大松活動與提案 mapping
 * return {
 *    id: "xxx"
 *    eventId: "abc" (上面的)
 *    projectId: "cofacts_project_id" (Cofacts的projectId)
 *    status: "confirmed"
 *    title: "Cofacts真的假的：這次名字不一樣" （這是留給每次大松活動可以客製化名稱）
 *    description: "描述"
 *  }
 *  @param {*} projects
 *  @param {*} events
 *  @return {*} json
 *
 */
function eventsProject(projects) {
  const eventsProject = [];
  projects.forEach((project) => {
    const awesomeProject = getProjectFromAwesome(project.name);
    console.log('===========');
    console.log('awesomeProject', awesomeProject);
    if (awesomeProject['g0v_db_rows']) {
      const g0vDBRows = typeof awesomeProject['g0v_db_rows'] === 'number' ? [awesomeProject['g0v_db_rows']] : awesomeProject['g0v_db_rows'].split(',');
      g0vDBRows.forEach((g0vDbRow) => {
        console.log('===========');
        console.log('g0vDbRow', g0vDbRow);
        const g0vProject = getProjectFromG0v(g0vDbRow);
        console.log('g0vProject', g0vProject);
        const eventName = formatEventName(g0vProject['event name']);
        console.log('eventName', eventName);
        const event = getEventFromAray(eventName.nth);
        console.log('g0vProject', g0vProject);
        console.log('event', event);
        eventsProject.push(createEventProject(event, project, g0vProject));
      });
    }
  });
  return eventsProject;
}

/**
 * input format 1: g0v hackath46n｜第肆拾陸次九週年黑客松
 * input format 2: g0v hackath38n | 台灣零時政府第參拾捌次在家黑客松
 * output { hackath: 'hackath46n', eventName: '第肆拾陸次九週年黑客松' }
 * @param {*} eventName
 * @return {*} json
 */
function formatEventName(eventName) {
  const splitReg = new RegExp('(\\s[\\|｜]\\s)|｜');
  const exec = splitReg.exec(eventName);
  const splitStr = exec[0];
  const [hackath, name] = eventName.split(splitStr);
  return { nth: hackath.replace('g0v ', ''), name };
}

function createEventProject(event, arayProjects, g0vProject) {
  eventProject = {
    id: crypto.randomUUID(),
    eventId: event.id, // from kktix event
    projectId: arayProjects.id, // from arayProjects
    status: 'confirmed',
    title: g0vProject.project, // from g0v project
    links: getLinks(g0vProject),
    description: g0vProject["three brief"],
    createdAt: moment(g0vProject["date"]).utc(8).toISOString(),
  }
  if(getUserId(g0vProject["owner name"])) {
    eventProject['createdBy'] = getUserId(g0vProject["owner name"]);
  }
  return eventProject
}

function getProjectFromAwesome(arayProjectName) {
  return awesomeProjects.find((project) => project.name === arayProjectName);
}

function getProjectFromG0v(projectIdx) {
  const idx = typeof projectIdx === 'string' ? parseInt(projectIdx) : projectIdx;
  return g0vDB[parseInt(idx-2)];
}

function getEventFromAray(eventName) {
  return events.find((event) => event.name.toLowerCase().indexOf(eventName.toLowerCase()) > -1);
}

function getLinks(g0vProject) {
  const guideline = isURL(g0vProject["guideline"]);
  const document = isURL(g0vProject["other document"]);
  const document2 = isURL(g0vProject["other document 2"]);
  const document3 = isURL(g0vProject["other document 3"]);
  const video = isURL(g0vProject["video link"]);
  const links = []
  if(guideline) links.push(formatLink(guideline));
  if(document) links.push(formatLink(document));
  if(document2) links.push(formatLink(document2));
  if(document3) links.push(formatLink(document3));
  if(video) links.push(formatLink(video));
  return links;
}

function isURL(link) {
try {
  return new URL(link).href;
} catch (e) {
  return false;
}
}

function formatLink(link) {
  return {
      name: link.indexOf("http") != 0 ? link : new URL(link).host,
      link,
  };
}

function getUserId(name) {
  if (!name) return null;
  if(name.indexOf(',') > -1) {
    name = name.split(',')[0];
  }
  console.log('getUserId',name)
  const user = users.find((user) => user.name.toLowerCase() === name.toLowerCase());
  return user ? user.username  : 'SEED';
}

fs.writeFile(
  './data/scripts/aray-events-projects.json',
  JSON.stringify(eventsProject(projects)),
  () => {},
);
