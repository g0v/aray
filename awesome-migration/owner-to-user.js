const fs = require('node:fs');
const schema = require('./schema.json');
const owner = require('./owner.json');
const crypto = require('node:crypto');

function migration(json, owners) {
  const ignoreKey = ['createdAt', 'createdBy', 'updatedAt', 'updatedBy'];
  let userSchema = json.data.__schema.types
    .filter((types)=> types.kind === 'OBJECT' && types.name === 'User')[0]
    .fields
    .reduce((pre, cv) =>
      pre += (cv.type.kind === 'NON_NULL' && !ignoreKey.includes(cv.name)? `${pre?',':''}"${cv.name}":""`:'')
    , '');
  userSchema = JSON.parse('{'+userSchema+'}');
  // console.log({...userSchema});
  return owners.map((owner) => {
    const user = JSON.parse(JSON.stringify(userSchema));
    return {
      ...user,
      username: `${owner.name}_${crypto.randomUUID()}`,
      name: owner.name + '',
      slackId: owner.slack_id,
      email: owner.email,
      githubId: owner.github_id,
      status: 'active',
    };
  });
}
// migration(schema, owner);
fs.writeFile('./awesome-migration/User.json', JSON.stringify(migration(schema, owner)), () => {});
