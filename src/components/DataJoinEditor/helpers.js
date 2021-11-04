import {
  listCategorys,
  listNeeds,
  listTags,
  listGovernmentAgencys,
} from 'graphql/queries';
import {
  createUserTag,
  deleteUserTag,
  createNeed,
  createUserNeed,
  deleteUserNeed,
  createCategory,
  createProjectCategory,
  deleteProjectCategory,
  createProjectNeed,
  deleteProjectNeed,
  createTag,
  createProjectTag,
  deleteProjectTag,
  createGovernmentAgency,
  createProjectGovernmentAgency,
  deleteProjectGovernmentAgency,
} from 'graphql/mutations';
import CategoryChip from 'components/CategoryChip';
import TagChip from 'components/TagChip';
import NeedChip from 'components/NeedChip';
import GovernmentAgencyChip from 'components/GovernmentAgencyChip';

export const getPropsByMode = (mode) => {
  let listOptionsQueryName;
  let createQueryName;
  let key;
  let linkKey;
  let createJoinDataQueryName;
  let deleteJoinDataQueryName;
  let chip;
  let freeSolo = true;
  switch (mode) {
  case 'user-tag':
    key = 'tagId';
    linkKey = 'username';
    listOptionsQueryName = listTags;
    createQueryName = createTag;
    createJoinDataQueryName = createUserTag;
    deleteJoinDataQueryName = deleteUserTag;
    chip = CategoryChip;
    break;
  case 'user-need':
    key = 'needId';
    linkKey = 'username';
    listOptionsQueryName = listNeeds;
    createQueryName = createNeed;
    createJoinDataQueryName = createUserNeed;
    deleteJoinDataQueryName = deleteUserNeed;
    chip = NeedChip;
    break;
  case 'project-category':
    key = 'categoryId';
    linkKey = 'projectId';
    listOptionsQueryName = listCategorys;
    createQueryName = createCategory;
    createJoinDataQueryName = createProjectCategory;
    deleteJoinDataQueryName = deleteProjectCategory;
    chip = CategoryChip;
    freeSolo = false;
    break;
  case 'project-tag':
    key = 'tagId';
    linkKey = 'projectId';
    listOptionsQueryName = listTags;
    createQueryName = createTag;
    createJoinDataQueryName = createProjectTag;
    deleteJoinDataQueryName = deleteProjectTag;
    chip = TagChip;
    break;
  case 'project-need':
    key = 'needId';
    linkKey = 'projectId';
    listOptionsQueryName = listNeeds;
    createQueryName = createNeed;
    createJoinDataQueryName = createProjectNeed;
    deleteJoinDataQueryName = deleteProjectNeed;
    chip = NeedChip;
    break;
  case 'project-governmentAgency':
    key = 'governmentAgencyId';
    linkKey = 'projectId';
    listOptionsQueryName = listGovernmentAgencys;
    createQueryName = createGovernmentAgency;
    createJoinDataQueryName = createProjectGovernmentAgency;
    deleteJoinDataQueryName = deleteProjectGovernmentAgency;
    chip = GovernmentAgencyChip;
    freeSolo = false;
    break;
  default:
  }
  return {
    key,
    chip,
    linkKey,
    listOptionsQueryName,
    createQueryName,
    createJoinDataQueryName,
    deleteJoinDataQueryName,
    freeSolo,
  };
};
