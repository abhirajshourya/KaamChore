import { auth } from './firebase-controller';

const groupData = [
  {
    id: 1,
    name: 'Group 1',
    members: [
      {
        id: 1,
        email: 'darshan@kaamchore.ca',
      },
      {
        id: 2,
        email: 'john@kaamchore.ca',
      },
      {
        id: 3,
        email: 'jane@kaamchore.ca',
      },
    ],
    chores: [
      {
        id: 1,
        name: 'Clean Kitchen',
        assignee: 'darshan@kaamchore.ca',
        status: 'overdue',
      },
      {
        id: 2,
        name: 'Vacuum Living Room',
        assignee: 'jane@kaamchore.ca',
        status: 'completed',
      },
      {
        id: 3,
        name: 'Mop Bathroom',
        assignee: 'jane@kaamchore.ca',
        status: 'pending',
      },
    ],
    recentActivity: 'darshan@kaamchore.ca checked-in',
    totalChores: 3,
    completedChores: 2,
  },
];

export const getGroups = () => {
  const currentUser = auth.currentUser.toJSON();
  return groupData.filter((group) => {
    return group.members.find((member) => member.email === currentUser.email);
  });
};

export const getGroup = (id) => {
  return groupData.find((group) => group.id === id);
};

export const createGroup = (group) => {
  const currentUser = auth.currentUser.toJSON();
  group.members.push({
    id: group.members.length + 1,
    email: currentUser.email,
  });
  groupData.push(group);
};

export const updateGroup = (group) => {
  const index = groupData.findIndex((g) => g.id === group.id);
  groupData[index] = group;
};

export const deleteGroup = (id) => {
  const index = groupData.findIndex((g) => g.id === id);
  groupData.splice(index, 1);
};
