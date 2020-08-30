import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: 'ahmedeldessouki-a7488',
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  storage: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
}

console.log(process.env)

firebase.initializeApp(config)
firebase.firestore()

export default firebase
