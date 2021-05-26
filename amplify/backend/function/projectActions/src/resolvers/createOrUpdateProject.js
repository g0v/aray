const { v1: uuidv1 } = require('uuid');
// const { S3 } = require('aws-sdk');

const {
  getProject,
  updateProjects,
  listProjectUsers,
  // listProjectTags,
  updateUserProjects,
  // getTag,
} = require('../lib/db');

module.exports = async ({
  arguments: { input },
  identity,
}) => {
  console.log({ input, identity });
  const currentUsername = identity.username;

  const {
    id: inId,
    status: inStatus,
    managers = [],
    name,
    summary,
    description,
    links = [],
    // tagItems = [],
    // keywordItems = [],
    // needItems = [],
  } = input;

  const existingProject = inId ? await getProject(inId) : {};
  console.log(existingProject);

  // check permissions first
  if (existingProject.owner && existingProject.owner !== currentUsername && !existingProject.managers.includes(currentUsername)) {
    throw new Error(`您的權限不足，無法修改此專案`);
  }

  const toUpdateProjects = [];
  // const toUpdateTags = [];
  const toUpdateUserProjects = [];
  // const toUpdateProjectTags = [];
  // const toRemoveProjectTags = [];

  const now = new Date().toISOString();
  const projectId = existingProject.id || uuidv1();
  const status = inStatus || existingProject.status;

  const updatedProject = Object.assign({
    __typename: 'Project',
    id: projectId,
    owner: currentUsername,
    createdAt: now,
    createdBy: currentUsername,
  }, existingProject, {
    status,
    managers,
    name,
    summary,
    description,
    links,
    updatedAt: now,
    updatedBy: currentUsername,
  });

  toUpdateProjects.push(updatedProject);

  const syncProjectUsers = async () => {
    // update user-project relationships
    const allAdminUsernames = [updatedProject.owner, ...managers];
    const allProjectUsers = await listProjectUsers(projectId);

    // Sync User Project List
    allAdminUsernames.forEach((username) => {
      const matched = allProjectUsers.find((item) => item.username === username);
      if (matched && matched.role !== 'manager') {
        // change role to manager
        toUpdateUserProjects.push(Object.assign(matched, {
          role: 'manager',
          updatedAt: now,
        }));
      } else
      if (!matched) {
        toUpdateUserProjects.push({
          __typename: 'UserProject',
          id: uuidv1(),
          projectId,
          username,
          role: 'manager',
          completedHours: 0,
          completedTasks: 0,
          updatedAt: now,
          createdAt: now,
        });
      }
    });

    allProjectUsers.forEach((projectUser) => {
      // downgrade from manager to contributor
      if (!allAdminUsernames.includes(projectUser.username)) {
        toUpdateUserProjects.push(Object.assign(projectUser, {
          role: 'contributor',
          updatedAt: now,
        }));
      }
    });
  };

  // const syncProjectTags = async () => {
  //   const allProjectTags = await listProjectTags(projectId);

  //   tagItems.forEach((tagItem) => {
  //     const matched = allProjectTags.find(({ tagId }) => tagId === tagItem.id);
  //     if (matched) {
  //       // do nothing since it's already there.
  //     } else {
  //       toUpdateProjectTags.push({
  //         __typename: 'ProjectTag',
  //         id: uuidv1(),
  //         projectId,
  //         tagId: tagItem.id,
  //         updatedAt: now,
  //         createdAt: now,
  //         createdBy: currentUsername,
  //         updatedBy: currentUsername,
  //       });
  //     }
  //   });
  // };

  await Promise.all([
    syncProjectUsers(),
    // syncProjectTags(),
  ]);

  console.log({ toUpdateProjects, toUpdateUserProjects });

  await Promise.all([
    updateProjects(toUpdateProjects),
    updateUserProjects(toUpdateUserProjects),
  ]);

  return {
    id: projectId,
  };
};
