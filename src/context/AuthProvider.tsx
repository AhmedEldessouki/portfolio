/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import React from 'react'
import {toast} from 'react-toastify'

import type {User as UserType} from '@firebase/auth-types/index'

import {auth, db, firebase} from '../Utils/firebase'
import {useLocalStorageState} from '../Utils/hooks'

import type {NewUser, Project} from '../../types/interfaces'

interface Context {
  useVerifyUserSignInCredentials: () => [
    verificationFailed: string,
    checkUserCredentials: (arg0: {
      email: string
      password: string
    }) => Promise<UserType>,
  ]

  signUserOut: () => void
  user: Pick<
    UserType,
    'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
  > | null
  setUser: React.Dispatch<
    React.SetStateAction<Pick<
      UserType,
      'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
    > | null>
  >
  useCreateNewUser: () => [
    newUserCreationFailed: string,
    createNewUser: (newUser: NewUser) => Promise<NewUser>,
  ]
  selectedProject: Project | undefined
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>
}

const AuthContext = React.createContext<any>({})
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}: {children?: React.ReactNode}) {
  const [user, setUser] = useLocalStorageState<Pick<
    UserType,
    'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
  > | null>('__portfolio_user__', null)

  const [selectedProject, setProject] = React.useState<Project | undefined>()

  React.useEffect(() => {
    if (!auth?.currentUser) return
    function verifyCurrentUserCredentials(
      userArg: Pick<
        UserType,
        'uid' | 'email' | 'phoneNumber' | 'photoURL' | 'providerId'
      > | null,
    ) {
      firebase.auth().onAuthStateChanged(currentUser => {
        if (currentUser && currentUser.uid !== userArg?.uid) {
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
          res => {
            setUser(res.user)
            toast.success(`LogIn Successful`)
          },
          err => {
            toast.error(`SignIn Failed "${err.message}"`)
            setVerificationFailed(err.message)
          },
        )
    }
    return [verificationFailed, checkUserCredentials]
  }
  function signUserOut() {
    if (auth?.currentUser) auth.signOut()
    setUser(null)
    toast.success(`See You Soon`)
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
    // eslint-disable-next-line no-constant-condition
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
