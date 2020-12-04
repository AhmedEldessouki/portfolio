import React from 'react'
import {toast} from 'react-toastify'

import {db, auth} from '../../Config/firebase'

/**
 * @param {Function} signIn - handles auth
 * @param {Function} signUp - handles signUp
 * @param {Function} signOut - handles signOut
 */

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}) {
  const [authData, setAuthData] = React.useState(
    auth.currentUser ? auth.currentUser.uid : null,
    // true,
  )
  const [project, setProject] = React.useState(null)

  async function signIn(credentials) {
    let resolved
    let error
    await auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(
        res => {
          toast.success(`LogIn Successful`)
          setAuthData(res.user)
          resolved = res.user
        },
        err => {
          toast.error(`SignIn Failed "${err.message}"`)
          error = err.message
        },
      )
    return {resolved, error}
  }

  function signOut() {
    auth.signOut()
    setAuthData(null)
    toast.success(`See You Soon`)
  }

  async function signUp(newUser) {
    let resolved
    let error
    await auth
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(
        resp => {
          db.collection('users')
            .doc(resp.user.uid)
            .set({
              hstName: newUser.firstName,
              lastName: newUser.lastName,
              initials: newUser.firstName[0] + newUser.lastName[0],
            })
          resolved = newUser
          toast.success(`Welcome "${newUser.email}" to The Club`)
          console.log(resp)
        },
        err => {
          error = err.message
          toast.error(`SignUp Failed "${err.message}"`)
        },
      )
    return {resolved, error}
  }
  const value = {
    signIn,
    signOut,
    signUp,
    authData,
    setAuthData,
    project,
    setProject,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)

  if (!context)
    throw new Error('"useAuth" should be used inside "AuthProvider"')

  return context
}

export {AuthProvider, useAuth}
