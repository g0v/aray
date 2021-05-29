/* eslint-disable quotes, comma-dangle */
import ProjectStatus from "constants/ProjectStatus";

export default {
  "title": "projectFormSchema_title",
  "type": "object",
  "required": [
    "status", "name"
  ],
  "properties": {
    "status": {
      "type": "string",
      "title": "projectFormSchema_status",
      "enum": ProjectStatus.map(({ value }) => value),
      "enumNames": ProjectStatus.map(({ label }) => label),
      "default": ProjectStatus[0].value,
    },
    "name": {
      "type": "string",
      "title": "projectFormSchema_name"
    },
    "summary": {
      "type": ["string", "null"],
      "title": "projectFormSchema_summary"
    },
    "description": {
      "type": ["string", "null"],
      "title": "projectFormSchema_description"
    },
    "links": {
      "type": "array",
      "title": "projectFormSchema_links",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "projectFormSchema_linksName",
          },
          "url": {
            "type": "string",
            "title": "projectFormSchema_linksUrl",
          },
        },
      },
      "default": []
    }
  }
};
