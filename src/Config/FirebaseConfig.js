import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'ahmedeldessouki-a7488.firebaseapp.com',
  databaseURL: 'https://ahmedeldessouki-a7488.firebaseio.com',
  projectId: 'ahmedeldessouki-a7488',
  storageBucket: 'gs://ahmedeldessouki-a7488.appspot.com',
  storage: 'gs://ahmedeldessouki-a7488.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

firebase.initializeApp(config)
firebase.firestore()

export default firebase
