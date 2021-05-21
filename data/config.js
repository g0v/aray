const { AWS_BRANCH } = process.env;

module.exports = {
  AWS_PROFILE: AWS_BRANCH ? 'default' : 'jothon',
  AWS_REGION: 'ap-northeast-1',
};
