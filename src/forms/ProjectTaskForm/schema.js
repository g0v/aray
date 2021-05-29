/* eslint-disable quotes, comma-dangle */
import ProjectTaskStatus from 'constants/ProjectTaskStatus';

export default {
  "title": "專案任務",
  "type": "object",
  "required": [
    "status", "summary", "hours"
  ],
  "properties": {
    "status": {
      "type": "string",
      "title": "狀態",
      'enum': ProjectTaskStatus.map(({ value }) => value),
      'enumNames': ProjectTaskStatus.map(({ label }) => label),
      'default': ProjectTaskStatus[0].value,
    },
    "summary": {
      "type": "string",
      "title": "名稱/描述"
    },
    "description": {
      "type": ["string", "null"],
      "title": "詳細敘述"
    },
    "hours": {
      "type": "number",
      "default": 1
    }
  }
};
