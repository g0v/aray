const { v1: uuidv1 } = require('uuid');
// const { S3 } = require('aws-sdk');

const {
  getProject,
  getUser,
  getUserProject,
  updateProjects,
  updateUsers,
  updateUserProjects,
  updateContributions,
} = require('../lib/db');

const CREATOR = 'System';

module.exports = async ({
  arguments: { input },
  identity,
}) => {
  console.log({ input, identity });
  const currentUsername = identity.username;

  const {
    projectId,
    contributions = [],
  } = input;

  /* Workflow
    - Create or update Contribution
    - Update Project totalCompletedHours, totalCompletedTasks
    - Update User totalCompletedHours, totalCompletedTasks
    - Create or update UserProject record and completedHours, completedTasks
  */
  const toUpdateContributions = [];
  const toUpdateUsers = [];
  const toUpdateUserProjects = [];

  const project = await getProject(projectId);
  console.log(project);

  // check permissions first
  if (project.owner && project.owner !== currentUsername && !project.managers.includes(currentUsername)) {
    throw new Error(`您的權限不足，無法修改此專案貢獻`);
  }

  const now = new Date().toISOString();

  const process = async ({
    id: inId,
    username,
    projectTaskId,
    summary,
    description,
    hours,
  }) => {
    const [
      user,
      existingUserProject,
    ] = await Promise.all([
      getUser(username),
      getUserProject(username, projectId),
    ]);

    const userProject = existingUserProject || {
      __typename: 'UserProject',
      id: uuidv1(),
      projectId,
      username,
      role: 'contributor',
      completedHours: 0,
      completedTasks: 0,
      createdAt: now,
      createdBy: CREATOR,
      updatedAt: now,
      updatedBy: CREATOR,
    };

    project.totalCompletedHours = project.totalCompletedHours || 0;
    project.totalCompletedTasks = project.totalCompletedTasks || 0;
    project.totalCompletedHours += hours;
    project.totalCompletedTasks += 1;
    project.updatedAt = now;
    project.updatedBy = CREATOR;
    if (!existingUserProject) {
      project.totalContributors = project.totalContributors || 0;
      project.totalContributors += 1;
    }

    user.totalCompletedHours = user.totalCompletedHours || 0;
    user.totalCompletedTasks = user.totalCompletedTasks || 0;
    user.totalCompletedHours += hours;
    user.totalCompletedTasks += 1;
    user.updatedAt = now;
    user.updatedBy = CREATOR;

    userProject.completedHours += hours;
    userProject.completedTasks += 1;
    userProject.updatedAt = now;
    userProject.updatedBy = CREATOR;

    const id = inId || uuidv1();

    const updatedContribution = Object.assign({
      __typename: 'Contribution',
      id,
      username,
      projectId,
      projectTaskId,
      summary,
      description,
      hours,
      createdAt: now,
      createdBy: currentUsername,
      updatedAt: now,
      updatedBy: currentUsername,
    });

    toUpdateContributions.push(updatedContribution);
    toUpdateUserProjects.push(userProject);
    toUpdateUsers.push(user);
  };

  await Promise.all(contributions.map(process));

  await Promise.all([
    updateProjects([project]),
    updateUsers(toUpdateUsers),
    updateUserProjects(toUpdateUserProjects),
    updateContributions(toUpdateContributions),
  ]);

  return {
    id: projectId,
  };
};
