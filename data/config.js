const { AWS_BRANCH } = process.env;

module.exports = {
  AWS_PROFILE: AWS_BRANCH ? 'default' : 'jothon',
  AWS_REGION: 'ap-northeast-1',
  APP_SYNC_ID: {
    ANNIE: 'croehb3fujf6pemzxx5dclodoa',
    DEV: 'w5utc7ntdvaf5d7ej3l432vzgu',
    TST: 'fjsjnmojv5g55nfx7vpala5avu',
    STG: 'jy3bw2qxxbff3me5nqugno7naq',
    PRD: 'vguerbgl3zafjj2aypbqgso32q',
  },
};
