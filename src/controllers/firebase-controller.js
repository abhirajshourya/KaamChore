import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAED4aemKAdq6x_Ux4A_6vcHjX70FzYvTU',
  authDomain: 'kaamchore-e1e04.firebaseapp.com',
  projectId: 'kaamchore-e1e04',
  storageBucket: 'kaamchore-e1e04.appspot.com',
  messagingSenderId: '703688583570',
  appId: '1:703688583570:web:53403870e89d9031a4794b',
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default firebaseApp;

// Sign up function
const signUp = async (email, password) => {
  // const auth = getAuth();
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in function
const signIn = async (email, password) => {
  // const auth = getAuth();
  console.log(auth);
  return await signInWithEmailAndPassword(auth, email, password);
};

export { signUp, signIn };
