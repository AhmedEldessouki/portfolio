import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseApp)
}

const db = firebase.firestore()
const auth = firebase.auth()

if (process.env.NODE_ENV !== 'production') {
  db.useEmulator('localhost', 8080)
}

export {db, auth, firebase}
