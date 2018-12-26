import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import ContactedMeReducer from './ContactedMeReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const RootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  contactedMe: ContactedMeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default RootReducer