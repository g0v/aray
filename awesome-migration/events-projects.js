const fs = require('node:fs');
const crypto = require('node:crypto');
const events = require('../data/scripts/aray-events.json');
const projects = require('../data/scripts/aray-projects.json');
const g0vDB = require('./g0vDb.json');
const awesomeProjects = require('./projects.json');

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
    if (awesomeProject['g0v_db_rows']) {
      const g0vDBRows = typeof awesomeProject['g0v_db_rows'] === 'number' ? [awesomeProject['g0v_db_rows']] : awesomeProject['g0v_db_rows'].split(',');
      g0vDBRows.forEach((g0vDbRow) => {
        const g0vProject = getProjectFromG0v(g0vDbRow);
        const eventName = formatEventName(g0vProject['event name']);
        const event = getEventFromKktix(eventName.nth);
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
  const splitStr = eventName.indexOf('｜') > -1 ? '｜' : '|';
  const [hackath, name] = eventName.split(splitStr);
  const [g0v, nth] = hackath.split(' ');
  return { nth: nth, name };
}

function createEventProject(event, arayProjects, g0vProject) {
  return {
    id: crypto.randomUUID(),
    eventId: event.id, // from kktix event
    projectId: arayProjects.id, // from arayProjects
    status: 'confirmed',
    title: g0vProject.project, // from g0v project
  };
}

function getProjectFromAwesome(arayProjectName) {
  return awesomeProjects.find((project) => project.name === arayProjectName);
}

function getProjectFromG0v(projectIdx) {
  const idx = typeof projectIdx === 'string' ? parseInt(projectIdx) : projectIdx;
  return g0vDB[parseInt(idx)];
}

function getEventFromKktix(eventName) {
  console.log('eventName', eventName);
  return events.find((event) => event.name.toLowerCase().indexOf(eventName.toLowerCase()) > -1);
}

eventsProject(projects);
