/* eslint-disable quotes, comma-dangle */
export default {
  "title": "個人資料",
  "type": "object",
  "required": [
    "name", "email"
  ],
  "properties": {
    "name": {
      "type": "string",
      "title": "名稱"
    },
    "email": {
      "type": "string",
      "title": "Email",
      "format": "email"
    },
    "selfIntroduction": {
      "type": ["string", "null"],
      "title": "自介"
    },
    "location": {
      "type": ["string", "null"],
      "title": "所在地區"
    },
    "slackId": {
      "type": ["string", "null"],
      "title": "Slack ID"
    },
    "urlWebsite": {
      "type": ["string", "null"],
      "title": "Website 網址"
    },
    "urlGithub": {
      "type": ["string", "null"],
      "title": "Github 網址"
    },
    "urlLinkedIn": {
      "type": ["string", "null"],
      "title": "LinkedIn 網址"
    },
    "urlFacebook": {
      "type": ["string", "null"],
      "title": "Facebook 網址"
    },
    "urlTwitter": {
      "type": ["string", "null"],
      "title": "Twitter 網址"
    },
    "urlInstagram": {
      "type": ["string", "null"],
      "title": "Instagram 網址"
    }
  }
};
