/* eslint-disable quotes, comma-dangle */
import ProjectStatus from 'constants/ProjectStatus';

export default {
  "title": "專案",
  "type": "object",
  "required": [
    "status", "name"
  ],
  "properties": {
    "status": {
      "type": "string",
      "title": "狀態",
      'enum': ProjectStatus.map(({ value }) => value),
      'enumNames': ProjectStatus.map(({ label }) => label),
      'default': ProjectStatus[0].value,
    },
    "name": {
      "type": "string",
      "title": "名稱"
    },
    "summary": {
      "type": ["string", "null"],
      "title": "簡述"
    },
    "description": {
      "type": ["string", "null"],
      "title": "詳細敘述"
    },
    "links": {
      "type": "array"
    }
  }
};
