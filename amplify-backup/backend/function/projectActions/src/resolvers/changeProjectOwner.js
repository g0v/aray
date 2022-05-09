const { v1: uuidv1 } = require('uuid');

const {
  getProject,
  updateProjects,
  updateUserProjects,
  getUserProject,
} = require('../lib/db');

module.exports = async ({
  arguments: { input },
  identity,
}) => {
  console.log({ input, identity });
  const currentUsername = identity.username;

  const {
    projectId,
    newOwner,
    keepCurrentOwnerAsManager = false,
  } = input;

  const existingProject = await getProject(projectId);
  console.log(existingProject);

  // check permissions first
  if (existingProject.owner && existingProject.owner !== currentUsername) {
    throw new Error(`您的權限不足，無法更換專案坑主`);
  }

  const toUpdateProjects = [];
  const toUpdateUserProjects = [];

  const now = new Date().toISOString();

  const managers = existingProject.managers.filter((x) => x !== newOwner);

  if (keepCurrentOwnerAsManager) {
    managers.push(currentUsername);
  }

  const updatedProject = Object.assign(existingProject, {
    owner: newOwner,
    managers,
    updatedAt: now,
    updatedBy: 'System',
  });

  toUpdateProjects.push(updatedProject);

  const [
    currentOwnerUserProject,
    newOwnerUserProject,
  ] = await Promise.all([
    getUserProject(currentUsername, projectId),
    getUserProject(newOwner, projectId),
  ]);

  // downgrade
  toUpdateUserProjects.push(Object.assign(currentOwnerUserProject, {
    role: keepCurrentOwnerAsManager ? 'manager' : 'contributor',
    updatedAt: now,
    updatedBy: 'System',
  }));

  // promote
  if (!newOwnerUserProject) {
    toUpdateUserProjects.push({
      __typename: 'UserProject',
      id: uuidv1(),
      projectId,
      username: newOwner,
      role: 'manager',
      completedHours: 0,
      completedTasks: 0,
      updatedAt: now,
      createdAt: now,
      createdBy: 'System',
      updatedBy: 'System',
    });
  } else {
    toUpdateUserProjects.push(Object.assign(newOwnerUserProject, {
      role: 'manager',
      updatedAt: now,
      updatedBy: 'System',
    }));
  }

  console.log({ toUpdateProjects, toUpdateUserProjects });

  await Promise.all([
    updateProjects(toUpdateProjects),
    updateUserProjects(toUpdateUserProjects),
  ]);

  return {
    id: projectId,
  };
};
