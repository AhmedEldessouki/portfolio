import {toast} from 'react-toastify'

export const signIn = credentials => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        toast.success(`Welcome "${credentials.email}"`)
        dispatch({
          type: 'LOGIN_SUCCESS',
        })
      })
      .catch(err => {
        toast.error('Login Failed, Incorrect Credentials!!')
        dispatch({
          type: 'LOGIN_ERROR',
          err,
        })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase()

    firebase
      .auth()
      .signOut()
      .then(() => {
        toast.success(`See You Soon`)
        dispatch({
          type: 'SIGNOUT_SUCCESS',
        })
      })
      .catch(err => {
        toast.error("Shit, You Can't Logout")
        dispatch({
          type: 'SIGNOUT_FAILED',
          err,
        })
      })
  }
}

export const signUp = newUser => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          })
      })
      .then(() => {
        toast.success(`Welcome "${newUser.email}" to The Club`)
        dispatch({type: 'SIGNUP_SUCCESS'})
      })
      .catch(err => {
        toast.error('SignUp Failed')
        dispatch({type: 'SIGNUP_ERROR', err})
      })
  }
}
