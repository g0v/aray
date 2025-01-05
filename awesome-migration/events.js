const fs = require("node:fs");
const crypto = require("node:crypto");
const schema = require("./schema.json");
const arayProjects = require("../data/scripts/aray-projects.json");

const events = require("./kktix-events.json");

function arayEvents(json) {
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
  return events.map((event) => {
    return {
      ...schema,
      id: crypto.randomUUID(),
      name: event,
      projectId: arayProjects[0].id,
      type: "實體活動",
      location: "",
      link: "",
    };
  });
}

fs.writeFile(
  "./data/scripts/aray-events.json",
  JSON.stringify(arayEvents(schema)),
  () => {}
);

console.log(arayEvents(schema));
