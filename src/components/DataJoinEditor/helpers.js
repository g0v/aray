import {
  listKeywords,
  listNeeds,
  listTags,
} from 'graphql/queries';
import {
  createKeyword,
  createUserKeyword,
  deleteUserKeyword,
  createNeed,
  createUserNeed,
  deleteUserNeed,
  createProjectKeyword,
  deleteProjectKeyword,
  createProjectNeed,
  deleteProjectNeed,
  createTag,
  createProjectTag,
  deleteProjectTag,
} from 'graphql/mutations';
import KeywordChip from 'components/KeywordChip';
import TagChip from 'components/TagChip';
import NeedChip from 'components/NeedChip';

export const getPropsByMode = (mode) => {
  let listOptionsQueryName;
  let createQueryName;
  let key;
  let linkKey;
  let createJoinDataQueryName;
  let deleteJoinDataQueryName;
  let chip;
  switch (mode) {
  case 'user-keyword':
    key = 'keywordId';
    linkKey = 'username';
    listOptionsQueryName = listKeywords;
    createQueryName = createKeyword;
    createJoinDataQueryName = createUserKeyword;
    deleteJoinDataQueryName = deleteUserKeyword;
    chip = KeywordChip;
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
  case 'project-keyword':
    key = 'keywordId';
    linkKey = 'projectId';
    listOptionsQueryName = listKeywords;
    createQueryName = createKeyword;
    createJoinDataQueryName = createProjectKeyword;
    deleteJoinDataQueryName = deleteProjectKeyword;
    chip = KeywordChip;
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
  };
};
