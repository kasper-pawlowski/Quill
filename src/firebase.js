import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlElP68ULM5OYZWq7f_b6fGcoIzRhhFv0",
    authDomain: "quill-cb9e9.firebaseapp.com",
    projectId: "quill-cb9e9",
    storageBucket: "quill-cb9e9.appspot.com",
    messagingSenderId: "14968190680",
    appId: "1:14968190680:web:341c706972e223bd7ac9ad"
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
