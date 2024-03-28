import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAED4aemKAdq6x_Ux4A_6vcHjX70FzYvTU',
  authDomain: 'kaamchore-e1e04.firebaseapp.com',
  projectId: 'kaamchore-e1e04',
  storageBucket: 'kaamchore-e1e04.appspot.com',
  messagingSenderId: '703688583570',
  appId: '1:703688583570:web:53403870e89d9031a4794b',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;

// Sign up function
const signUp = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log('Sign up successful:', user);
    })
    .catch((error) => {
      // Error occurred during sign up
      console.error('Sign up error:', error);
    });
};

// Sign in function
const signIn = async (email, password) => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password);
};

export { signUp, signIn };
