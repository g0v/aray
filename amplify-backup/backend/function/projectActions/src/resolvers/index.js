module.exports = {
  Mutation: {
    createOrUpdateProject: require('./createOrUpdateProject'),
    createOrUpdateProjectContributions: require('./createOrUpdateProjectContributions'),
    changeProjectOwner: require('./changeProjectOwner'),

    createOrUpdateEventAttendance: require('./createOrUpdateEventAttendance'),
  },
};
