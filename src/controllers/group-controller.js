const groupData = [
  {
    id: 1,
    name: 'Group 1',
    members: [
      {
        id: 1,
        name: 'Darshan',
        checkedIn: true,
      },
      {
        id: 2,
        name: 'John',
        checkedIn: false,
      },
      {
        id: 3,
        name: 'Jane',
        checkedIn: true,
      },
    ],
    chores: [
      {
        id: 1,
        name: 'Chore 1',
        completed: true,
      },
      {
        id: 2,
        name: 'Chore 2',
        completed: false,
      },
      {
        id: 3,
        name: 'Chore 3',
        completed: true,
      },
    ],
    recentActivity: 'Jane checked-in',
    totalChores: 3,
    completedChores: 2,
  },
  {
    id: 2,
    name: 'Group 2',
    members: [
      {
        id: 1,
        name: 'Darshan',
        checkedIn: true,
      },
      {
        id: 2,
        name: 'John',
        checkedIn: false,
      },
      {
        id: 3,
        name: 'Jane',
        checkedIn: true,
      },
    ],
    chores: [
      {
        id: 1,
        name: 'Chore 1',
        completed: true,
      },
      {
        id: 2,
        name: 'Chore 2',
        completed: false,
      },
      {
        id: 3,
        name: 'Chore 3',
        completed: true,
      },
    ],
    recentActivity: 'Darshan checked-in',
    totalChores: 3,
    completedChores: 2,
  },
];

export const getGroups = () => {
  return groupData;
};

export const getGroup = (id) => {
  return groupData.find((group) => group.id === id);
};

export const createGroup = (group) => {
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
