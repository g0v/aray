/* eslint-disable quotes, comma-dangle */

export default {
  "title": "contributionFormSchema_title",
  "type": "object",
  "required": [
    "username", "summary"
  ],
  "properties": {
    "username": {
      "type": "string",
      "title": "contributionFormSchema_username"
    },
    "projectTaskId": {
      "type": ["string", "null"],
      "title": "contributionFormSchema_projectTaskId",
      "description": "contributionFormSchema_projectTaskIdDescription"
    },
    "summary": {
      "type": "string",
      "title": "contributionFormSchema_summary"
    },
    "description": {
      "type": ["string", "null"],
      "title": "contributionFormSchema_description"
    },
    "hours": {
      "type": "number",
      "title": "contributionFormSchema_hours",
      "default": 1
    }
  }
};
