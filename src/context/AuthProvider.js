import React from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

import {auth, db, firebaseApp} from '../components/Utils/firebase'
import {useLocalStorageState} from '../components/Utils/util'

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}) {
  const [authData, setAuthData] = useLocalStorageState(
    '__portfolio_user__',
    null,
  )

  const [project, setProject] = React.useState(null)

  React.useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user && user.id !== authData) {
        setAuthData(user.uid)
      }
    })
  }, [authData, setAuthData])

  function useSignIn() {
    const [authError, setAuthError] = React.useState('')

    const signIn = React.useCallback(credentials => {
      let error
      auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          res => {
            Redirect({to: '/'})
            toast.success(`LogIn Successful`)
            setAuthData(res.user)
          },
          err => {
            toast.error(`SignIn Failed "${err.message}"`)
            setAuthError(err.message)
          },
        )
      return {error}
    }, [])
    return [authError, signIn]
  }

  function signOut() {
    auth.signOut()
    setAuthData(null)
    toast.success(`See You Soon`)
    Redirect({to: '/'})
  }

  function useSignUp() {
    const [authError, setAuthError] = React.useState('')

    const signUp = React.useCallback(
      newUser =>
        auth
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
              setAuthData(newUser.uid)
              toast.success(`Welcome "${newUser.email}" to The Club`)
            },
            err => {
              setAuthError(err.message)
              toast.error(`SignUp Failed "${err.message}"`)
            },
          ),
      [],
    )
    return [authError, signUp]
  }
  const value = {
    useSignIn,
    signOut,
    useSignUp,
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
