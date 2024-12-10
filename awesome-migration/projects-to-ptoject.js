const fs = require("node:fs");
const schema = require("./schema.json");
const projects = require("./projects.json");
const crypto = require("node:crypto");
const g0vJson = require("./g0vDb.json");
const arayUsers = require("../data/scripts/aray-users.json");

/**
 *
 *
 * @param {*} json
 * @param {*} projects
 * @returns
 */
function migration(json, projects) {
  const ignoreKey = ["createdAt", "createdBy", "updatedAt", "updatedBy"];
  const schemaName = "Project";
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

  return projects.map((project) => {
    const projectSchema = JSON.parse(JSON.stringify(schema));

    //TODO: 整併 g0vDB 資料
    const g0vProjects = getG0vProjects(project.g0v_db_rows);
    const mergedG0vProjects = mergeG0vProjects(g0vProjects);
    console.group(project.name, project.g0v_db_rows);
    console.log(g0vProjects);
    console.log(mergedG0vProjects);
    console.groupEnd();
    return {
      ...projectSchema,
      id: crypto.randomUUID(),
      description: project.description,
      name: project.name,
      status: "active",
      owner: getArayUser(project.owners.split(",")[0]),
      //TODO: managers 從 owners 轉換成 ARAY user
      managers: [""],
      links: formatLink([
        ...new Set(
          mergedG0vProjects.guideline.concat(
            mergedG0vProjects.other_document,
            mergedG0vProjects.other_document_2,
            mergedG0vProjects.other_document_3,
            mergedG0vProjects.video_link,
            mergedG0vProjects.facebook
          )
        ),
      ]),
      slackChannel: "",
    };
  });
}

function getG0vProjects(dbIndex) {
  const g0vRowIdxStart = 2;
  dbIndex = typeof dbIndex === "string" ? dbIndex.split(",") : [dbIndex + ""];
  return g0vJson.filter((rowData, index) =>
    dbIndex.includes(index + g0vRowIdxStart + "")
  );
}

function getArayUser(owner) {
  return arayUsers.filter(user => user.name === owner);
}

function mergeG0vProjects(projects) {
  return projects.reduce(
    (pre, cur) => {
      return {
        event_name: cur["event name"]
          ? Array.from(new Set([...pre.event_name, cur["event name"]]))
          : pre.event_name,
        three_brief: cur["three brief"]
          ? Array.from(
              new Set([...pre.three_brief, ...splitString(cur["three brief"])])
            )
          : pre.three_brief,
        manpower: cur.manpower
          ? Array.from(new Set([...pre.manpower, ...splitString(cur.manpower)]))
          : pre.manpower,
        guideline: isURL(cur.guideline)
          ? Array.from(new Set([...pre.guideline, isURL(cur.guideline)]))
          : pre.guideline,
        other_document: isURL(cur["other document"])
          ? Array.from(
              new Set([...pre.other_document, isURL(cur["other document"])])
            )
          : pre.other_document,
        other_document_2: isURL(cur["other document 2"])
          ? Array.from(
              new Set([...pre.other_document_2, isURL(cur["other document 2"])])
            )
          : pre.other_document_2,
        other_document_3: cur["other document 3"]
          ? Array.from(
              new Set([
                ...pre.other_document_3,
                ...cur["other document 3"].split(",").filter(link => isURL(link)),
              ])
            )
          : pre.other_document_3,
        video_link: cur["video link"]
          ? Array.from(new Set([...pre.video_link, cur["video link"]]))
          : pre.video_link,
        facebook: cur.facebook
          ? Array.from(new Set([...pre.facebook, cur.facebook]))
          : pre.facebook,
        slack_id: cur["slack id"]
          ? Array.from(new Set([...pre.slack_id, cur["slack id"]]))
          : pre.slack_id,
        tags: cur.tags
          ? Array.from(new Set([...pre.tags, ...cur.tags]))
          : pre.tags,
        slack_channel: cur["slack channel"]
          ? Array.from(
              new Set([
                ...pre.slack_channel,
                ...cur["slack channel"].split(","),
              ])
            )
          : pre.slack_channel,
      };
    },
    {
      event_name: [],
      three_brief: [],
      manpower: [],
      guideline: [],
      other_document: [],
      other_document_2: [],
      other_document_3: [],
      video_link: [],
      owner_name: [],
      facebook: [],
      slack_id: [],
      tags: [],
      slack_channel: [],
    }
  );
}

function splitString(string) {
  return string.replace(/[.,、，；\\/](\s+)?/g, ",").split(",");
}

function isURL(link) {
  try {
    return new URL(link).href;
  } catch (e) {
    return false;
  }
}

function formatLink(links) {
  return links.map(link => {
    const name = link.indexOf("http") != 0 ? link : new URL(link).host;
    return { name, link };
  })
  
}

// migration(schema, owner);
fs.writeFile(
  "./data/scripts/aray-projects.json",
  JSON.stringify(migration(schema, projects)),
  () => {}
);
