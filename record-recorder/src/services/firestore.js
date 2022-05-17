import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
//   }
const firebaseConfig = {
  apiKey: "AIzaSyD7AMc1_1geoVbV0XK_8JFjGzeSYAc88r8",
  authDomain: "record-recorder.firebaseapp.com",
  projectId: "record-recorder",
  storageBucket: "record-recorder.appspot.com",
  messagingSenderId: "397702834403",
  appId: "1:397702834403:web:f9fcb72a2000c6fa2a3dd6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });