import React from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

import {auth, db, firebaseApp} from '../components/Utils/firebase'
import {useLocalStorageState} from '../components/Utils/util'

const AuthContext = React.createContext()
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}) {
  const [user, setUser] = useLocalStorageState('__portfolio_user__', null)

  const [selectedProject, setProject] = React.useState(null)

  React.useEffect(() => {
    function verifyCurrentUserCredentials(user) {
      firebaseApp.auth().onAuthStateChanged(currentUser => {
        if (currentUser && currentUser.id !== user) {
          setUser(currentUser.uid)
        }
      })
    }
    verifyCurrentUserCredentials(user)
  }, [user, setUser])

  function useVerifyUserSignInCredentials() {
    const [verificationFailed, setVerificationFailed] = React.useState('')

    async function checkUserCredentials(credentials) {
      await auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          async res => {
            await setUser(res.user)
            toast.success(`LogIn Successful`)
            Redirect({to: '/'})
            return
          },
          err => {
            toast.error(`SignIn Failed "${err.message}"`)
            setVerificationFailed(err.message)
            return
          },
        )
    }
    return [verificationFailed, checkUserCredentials]
  }
  function signUserOut() {
    auth.signOut()
    setUser(null)
    toast.success(`See You Soon`)
    Redirect({to: '/'})
  }

  function useCreateNewUser() {
    const [newUserCreationFailed, setNewUserCreationFailed] = React.useState('')

    const createNewUser = async newUser => {
      return auth
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(
          async resp => {
            await db
              .collection('users')
              .doc(resp.user.uid)
              .set({
                hstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
              })
            setUser(newUser.uid)
            toast.success(`Welcome "${newUser.email}" to The Club`)
          },
          err => {
            setNewUserCreationFailed(err.message)
          },
        )
    }
    return [newUserCreationFailed, createNewUser]
  }

  const value = {
    useVerifyUserSignInCredentials,
    signUserOut,
    useCreateNewUser,
    user,
    setUser,
    selectedProject,
    setProject,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const {
    useVerifyUserSignInCredentials,
    signUserOut,
    useCreateNewUser,
    user,
    setUser,
    selectedProject,
    setProject,
  } = React.useContext(AuthContext)

  if (
    !{
      useVerifyUserSignInCredentials,
      signUserOut,
      useCreateNewUser,
      user,
      setUser,
      selectedProject,
      setProject,
    }
  )
    throw new Error('"useAuth" should be used inside "AuthProvider"')

  return {
    useVerifyUserSignInCredentials,
    signUserOut,
    useCreateNewUser,
    user,
    setUser,
    selectedProject,
    setProject,
  }
}

export {AuthProvider, useAuth}
