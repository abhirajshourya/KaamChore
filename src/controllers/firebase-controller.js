import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAED4aemKAdq6x_Ux4A_6vcHjX70FzYvTU',
  authDomain: 'kaamchore-e1e04.firebaseapp.com',
  projectId: 'kaamchore-e1e04',
  storageBucket: 'kaamchore-e1e04.appspot.com',
  messagingSenderId: '703688583570',
  appId: '1:703688583570:web:53403870e89d9031a4794b',
};

const firebaseApp = initializeApp(firebaseConfig);

// Get the Firestore instance
export const db = getFirestore(firebaseApp);

export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Sign up function
export const signUp = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Sign in function
export const signIn = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Logout function
export const logout = async () => {
  try {
    return await signOut(auth);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default firebaseApp;
