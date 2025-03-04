const fs = require('fs');
const EventProjects = require('../data/scripts/aray-events-projects.json');
const g0vDB = require('./g0vDb.json');

function parse() {
    EventProjects.map((eventProject) => {
        const g0vProject = g0vDB.find((project) => project.project === eventProject.title);
        if (!g0vProject) {
            console.log('Not found:', eventProject.title);
            return;
        }
        return {
            ...eventProject,
            links: getLinks(g0vProject)
        };
    })
}

function getLinks(g0vProject) {
    const document = isURL(g0vProject["other document"]);
    const document2 = isURL(g0vProject["other document 2"]);
    const document3 = isURL(g0vProject["other document 3"]);
    const video = isURL(g0vProject["video link"]);
    const links = []
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

fs.writeFile(
  './data/scripts/aray-events-projects-with-link.json',
  JSON.stringify(parse()),
  () => {}
);
