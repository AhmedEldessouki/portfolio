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
  )

  function signIn(credentials) {
    auth
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(
        res => {
          toast.success(`LogIn Successful`)
          setAuthData(res.user)
        },
        err => {
          throw err.message
        },
      )
  }

  function signOut() {
    auth.signOut()
    setAuthData(null)
    toast.success(`See You Soon`)
  }

  function signUp(newUser) {
    auth.createUserWithEmailAndPassword(newUser.email, newUser.password).then(
      resp => {
        db.collection('users')
          .doc(resp.user.uid)
          .set({
            hstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
          })
        toast.success(`Welcome "${newUser.email}" to The Club`)
        return newUser
      },
      err => {
        toast.error('SignUp Failed')
        throw err
      },
    )
  }
  const value = {signIn, signOut, signUp, authData, setAuthData}

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)

  if (!context)
    throw new Error('"useAuth" should be used inside "AuthProvider"')

  return context
}

export {AuthProvider, useAuth}
