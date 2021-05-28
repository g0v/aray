import {
  listUsers,
} from 'graphql/queries';
import {
  createOrUpdateProject,
} from 'graphql/mutations';

export const getPropsByMode = () => {
  return {
    listOptionsQueryName: listUsers,
    createQueryName: createOrUpdateProject,
  };
};
