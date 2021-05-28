/* eslint-disable quotes, comma-dangle */

export default {
  "title": "貢獻",
  "type": "object",
  "required": [
    "username", "summary"
  ],
  "properties": {
    "username": {
      "type": "string",
      "title": "貢獻者"
    },
    "projectTaskId": {
      "type": ["string", "null"],
      "title": "任務模板",
      "description": "非必選。可以直接填帖簡述與時數。"
    },
    "summary": {
      "type": "string",
      "title": "簡述"
    },
    "description": {
      "type": ["string", "null"],
      "title": "內容"
    },
    "hours": {
      "type": "number",
      "title": "時數",
      "default": 1
    }
  }
};
