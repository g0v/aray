/* eslint-disable quotes, comma-dangle */
import ProjectTaskStatus from 'constants/ProjectTaskStatus';

export default {
  "title": "projectTaskFormSchema_title",
  "type": "object",
  "required": [
    "status", "summary", "hours"
  ],
  "properties": {
    "status": {
      "type": "string",
      "title": "projectTaskFormSchema_status",
      'enum': ProjectTaskStatus.map(({ value }) => value),
      'enumNames': ProjectTaskStatus.map(({ label }) => label),
      'default': ProjectTaskStatus[0].value,
    },
    "summary": {
      "type": "string",
      "title": "projectTaskFormSchema_summary"
    },
    "description": {
      "type": ["string", "null"],
      "title": "projectTaskFormSchema_description"
    },
    "hours": {
      "title": "projectTaskFormSchema_hours",
      "type": "number",
      "default": 1
    }
  }
};
