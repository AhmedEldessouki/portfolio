import React from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

import {auth, db, firebaseApp} from '../components/Utils/firebase'
import {useLocalStorageState} from '../components/Utils/hooks'

import {User} from '@firebase/auth-types/index'
import type {NewUser, Project} from '../components/Utils/interfaces'

interface Context {
  useVerifyUserSignInCredentials: () => [
    verificationFailed: string,
    checkUserCredentials: (arg0: {
      email: string
      password: string
    }) => Promise<User>,
  ]

  signUserOut: () => void
  user: Pick<
    User,
    'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
  > | null
  setUser: React.Dispatch<
    React.SetStateAction<Pick<
      User,
      'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
    > | null>
  >
  useCreateNewUser: () => [
    newUserCreationFailed: string,
    createNewUser: (newUser: NewUser) => Promise<User>,
  ]
  selectedProject: Project | undefined
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>
}

const AuthContext = React.createContext<any>({})
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useLocalStorageState('__portfolio_user__', null)

  const [selectedProject, setProject] = React.useState<Project | undefined>()

  React.useEffect(() => {
    if (!auth.currentUser) return
    function verifyCurrentUserCredentials(
      user: Pick<
        User,
        'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
      > | null,
    ) {
      firebaseApp.auth().onAuthStateChanged(currentUser => {
        if (currentUser && currentUser.uid !== user?.uid) {
          setUser(currentUser)
        }
      })
    }
    verifyCurrentUserCredentials(user)
  }, [user, setUser])

  function useVerifyUserSignInCredentials() {
    const [verificationFailed, setVerificationFailed] = React.useState('')

    async function checkUserCredentials(credentials: {
      email: string
      password: string
    }) {
      await auth
        .signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(
          async res => {
            setUser(res.user)
            toast.success(`LogIn Successful`)
            new Redirect({to: '/'})
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
    if (auth.currentUser) auth.signOut()
    setUser(null)
    toast.success(`See You Soon`)
    new Redirect({to: '/'})
  }

  function useCreateNewUser() {
    const [newUserCreationFailed, setNewUserCreationFailed] = React.useState('')

    const createNewUser = async (newUser: NewUser) => {
      return auth
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then(
          async resp => {
            await db
              .collection('users')
              .doc(user?.uid)
              .set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
              })
            setUser(resp.user)
            toast.success(`Welcome "${newUser.email}" to The Club`)
            new Redirect({to: '/'})
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
  } = React.useContext<Context>(AuthContext)

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
