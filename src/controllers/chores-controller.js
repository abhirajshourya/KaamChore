import { auth } from './firebase-controller';
import { getGroup, getGroups } from './group-controller';
import { db } from './firebase-controller';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

export const createChore = async (chore) => {
  try {
    const docRef = await addDoc(collection(db, 'chores'), chore);
    console.log('Document written with ID: ', docRef.id);
    return docRef;
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const getAllChores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'chores'));
    return querySnapshot;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};

export const getGroupChores = async (groupId) => {
  try {
    const docRef = doc(db, 'groups', groupId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data().chores;
    } else {
      console.log('No such document!');
    }
  } catch (e) {
    console.error('Error getting document: ', e);
  }
};

export const getUserChores = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'chores'));
    const user = auth.currentUser.toJSON();
    let chores = {};
    querySnapshot.forEach((doc) => {
      if (doc.data().assignee === user.email) {
        chores = {
          ...chores,
          [doc.id]: doc.data(),
        };
      }
    });
    return chores;
  } catch (e) {
    console.error('Error getting documents: ', e);
  }
};

export const updateChore = async (choreId, chore) => {
  try {
    const choreRef = doc(db, 'chores', choreId);
    await setDoc(choreRef, chore);
    console.log('Document successfully updated!');
  } catch (e) {
    console.error('Error updating document: ', e);
  }
};

export const deleteChore = async (choreId) => {
  try {
    await deleteDoc(doc(db, 'chores', choreId));
    console.log('Document successfully deleted!');
  } catch (e) {
    console.error('Error removing document: ', e);
  }
};
