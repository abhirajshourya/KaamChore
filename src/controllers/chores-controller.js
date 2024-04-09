import { auth } from './firebase-controller';
import { getGroups } from './group-controller';

export const getUserChores = () => {
  const currentUser = auth.currentUser.toJSON();
  const groups = getGroups();
  let chores = [];
  groups.forEach((group) => {
    group.chores.forEach((chore) => {
      if (chore.assignee === currentUser.email) {
        chores.push(chore);
      }
    });
  });
  return chores;
};

export const getAllChores = (groupId) => {
  const groups = getGroups();
  const group = groups.find((group) => group.id === groupId);
  return group.chores;
};
