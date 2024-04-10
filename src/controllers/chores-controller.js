import { auth } from './firebase-controller';
import { getGroup, getGroups } from './group-controller';

export const getUserChores = async () => {
  let chores = [];
  getGroups().then((dataSnapshot) => {
    dataSnapshot.forEach((doc) => {
      const group = doc.data();
      if (group.members.includes(auth.currentUser.toJSON().email)) {
        group.chores.forEach((chore) => {
          chores.push(chore);
        });
      }
    });
  });
  return chores;
};

export const getAllChores = async (groupId) => {
  let chores = [];
  getGroups().then((dataSnapshot) => {
    dataSnapshot.forEach((doc) => {
      const group = doc.data();
      if (group.id === groupId) {
        group.chores.forEach((chore) => {
          chores.push(chore);
        });
      }
    });
  });
  return chores;
};
