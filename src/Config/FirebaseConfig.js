import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM",
  authDomain: "ahmedeldessouki-a7488.firebaseapp.com",
  databaseURL: "https://ahmedeldessouki-a7488.firebaseio.com",
  projectId: "ahmedeldessouki-a7488",
  storageBucket: "ahmedeldessouki-a7488.appspot.com",
  messagingSenderId: "928636667018"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;