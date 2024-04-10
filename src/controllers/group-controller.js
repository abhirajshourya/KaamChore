import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase-controller';

export const filterGroupByUser = (group) => {
  const user = auth.currentUser.toJSON();
  return group.members.includes(user.email);
};

export const getGroup = async (groupId) => {
  try {
    const docRef = doc(db, 'groups', groupId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap;
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};

export const getGroups = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'groups'));
    return querySnapshot;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};

/**
 * Create a new group
 * @param {*} group
 * @returns
 */
export const createGroup = async (group) => {
  const currentUser = auth.currentUser.toJSON();
  group.members.push(currentUser.email);
  try {
    const docRef = await addDoc(collection(db, 'groups'), group);
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

/**
 * Update an existing group
 * @param {*} group
 */
export const updateGroup = async (id, group) => {
  try {
    const groupRef = doc(db, 'groups', id);
    await setDoc(groupRef, group);
    console.log('Document updated: ', id);
    return groupRef;
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};

export const deleteGroup = async (id) => {
  try {
    const groupRef = doc(db, 'groups', id);
    await deleteDoc(groupRef);
    console.log('Group deleted: ', id);
    return groupRef;
  } catch (e) {
    console.error('Error deleting group: ', e);
  }
};
