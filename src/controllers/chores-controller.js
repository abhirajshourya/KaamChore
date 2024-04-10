import { auth } from './firebase-controller';
import { getGroup, getGroups } from './group-controller';
import { db } from './firebase-controller';
import { addDoc, collection, doc, getDoc, getDocs } from 'firebase/firestore';

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

// export const getAllChores = async (groupId) => {
//   let chores = [];
//   getGroups().then((dataSnapshot) => {
//     dataSnapshot.forEach((doc) => {
//       const group = doc.data();
//       if (group.id === groupId) {
//         group.chores.forEach((chore) => {
//           chores.push(chore);
//         });
//       }
//     });
//   });
//   return chores;
// };
