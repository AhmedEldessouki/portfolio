import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {
  apiKey,
  databaseURL,
  storageBucket,
  storage,
  messagingSenderId,
} from '../../Config'

const firebaseApp = firebase.initializeApp({
  apiKey: apiKey,
  authDomain: 'ahmedeldessouki-a7488.firebaseapp.com',
  databaseURL: databaseURL,
  projectId: 'ahmedeldessouki-a7488',
  storageBucket: storageBucket,
  storage: storage,
  messagingSenderId: messagingSenderId,
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth, firebaseApp}
