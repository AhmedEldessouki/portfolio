import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM",
  authDomain: "ahmedeldessouki-a7488.firebaseapp.com",
  databaseURL: "https://ahmedeldessouki-a7488.firebaseio.com",
  projectId: "ahmedeldessouki-a7488",
  storageBucket: "gs://ahmedeldessouki-a7488.appspot.com",
  storage: "gs://ahmedeldessouki-a7488.appspot.com",
  messagingSenderId: "928636667018"
};

firebase.initializeApp(config);
const settings = {/* your settings... */ timestampsInSnapshots: true};
firebase.firestore().settings(settings);

export default firebase;