/* eslint-disable import/order */
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import ContactedMeReducer from './ContactedMeReducer'
import uploadLogoReducer from './uploadLogoReducer'
import NotificationReducer from './NotificationReducer'

const RootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  contactedMe: ContactedMeReducer,
  projectLogos: uploadLogoReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  notifications: NotificationReducer,
})

export default RootReducer
