import {
  listUsers,
} from 'graphql/queries';
import {
  changeProjectOwner,
} from 'graphql/mutations';

export const getPropsByMode = () => {
  return {
    listOptionsQueryName: listUsers,
    createQueryName: changeProjectOwner,
  };
};
