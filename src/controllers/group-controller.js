import firebaseApp from './firebase-controller';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

// Get the Firestore instance
const db = getFirestore(firebaseApp);