import { initializeApp } from "firebase/app";
import { getAuth } from'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBnvNWVpvdjoVfIV4uuONbYqOLCzaLBMQk",
  authDomain: "journall-app-react-redux.firebaseapp.com",
  projectId: "journall-app-react-redux",
  storageBucket: "journall-app-react-redux.appspot.com",
  messagingSenderId: "909014582091",
  appId: "1:909014582091:web:bef155eff633bbc440dece",
};

// Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirestoreApp = getFirestore(FirebaseApp)
