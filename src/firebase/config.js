import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6ah1sfbxhAgO4fgmpWbWjlspVvolQEx4",
    authDomain: "rj51155.firebaseapp.com",
    projectId: "rj51155",
    storageBucket: "rj51155.appspot.com",
    messagingSenderId: "272597580099",
    appId: "1:272597580099:web:9bcbfdbd207276f78857f6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()