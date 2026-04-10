import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, query, where, onSnapshot, Timestamp, addDoc, serverTimestamp } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const isConfigValid = firebaseConfig && firebaseConfig.apiKey && firebaseConfig.projectId;

let app;
if (isConfigValid) {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
} else {
  console.warn('Firebase configuration is missing or invalid. Authentication and Firestore features may not work.');
  // Minimal config to prevent initialization failure if still called, 
  // though we handle it by checking isConfigValid.
  app = getApps().length === 0 ? initializeApp({
    apiKey: "placeholder",
    authDomain: "placeholder",
    projectId: "placeholder",
    storageBucket: "placeholder",
    messagingSenderId: "placeholder",
    appId: "placeholder"
  }) : getApp();
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export { collection, doc, setDoc, getDoc, getDocs, query, where, onSnapshot, Timestamp, addDoc, serverTimestamp, signInWithPopup, signOut };
