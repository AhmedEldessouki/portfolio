import firebase from 'firebase/compat/app'
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  connectFirestoreEmulator,
  updateDoc,
  getDoc,
  addDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  connectAuthEmulator,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import {
  apiKey,
  databaseURL,
  storageBucket,
  storage,
  messagingSenderId,
} from '../config'

const firebaseApp = {
  apiKey,
  authDomain: 'ahmedeldessouki-a7488.firebaseapp.com',
  databaseURL,
  projectId: 'ahmedeldessouki-a7488',
  storageBucket,
  storage,
  messagingSenderId,
}

const app = firebase.initializeApp(firebaseApp)

const db = getFirestore(app)
const auth = getAuth(app)

if (process.env.NODE_ENV !== 'production') {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectAuthEmulator(auth, 'http://localhost:9099')
}

export {
  firebase,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  db,
  query,
  where,
  collection,
  doc,
  getDocs,
  addDoc,
  getDoc,
  updateDoc,
  deleteDoc,
}
