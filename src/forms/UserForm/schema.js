/* eslint-disable quotes, comma-dangle */
export default {
  "title": "userFormSchema_title",
  "type": "object",
  "required": [
    "name", "email"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "userFormSchema_name"
    },
    "email": {
      "type": "string",
      "title": "userFormSchema_email",
      "format": "email"
    },
    "selfIntroduction": {
      "type": ["string", "null"],
      "title": "userFormSchema_selfIntroduction"
    },
    "location": {
      "type": ["string", "null"],
      "title": "userFormSchema_location"
    },
    "slackId": {
      "type": ["string", "null"],
      "title": "userFormSchema_slackId"
    },
    "urlWebsite": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlWebsite"
    },
    "urlGithub": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlGithub"
    },
    "urlLinkedIn": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlLinkedIn"
    },
    "urlFacebook": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlFacebook"
    },
    "urlTwitter": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlTwitter"
    },
    "urlInstagram": {
      "type": ["string", "null"],
      "title": "userFormSchema_urlInstagram"
    }
  }
};
