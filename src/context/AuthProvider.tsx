/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import React from 'react'
import {toast} from 'react-toastify'

import type {User as UserType} from '@firebase/auth-types/index'

import {auth, db, firebase} from '../Utils/firebase'
import {useLocalStorageState} from '../Utils/hooks'

import type {NewUser, Project} from '../../types/interfaces'

interface Context {
  user: UserType | null | undefined
  setUser: React.Dispatch<React.SetStateAction<UserType | null | undefined>>
  selectedProject: Project | undefined
  setProject: React.Dispatch<React.SetStateAction<Project | undefined>>
}

const AuthContext = React.createContext<Context>({
  user: null,
  selectedProject: undefined,
  setProject: () => {},
  setUser: () => {},
})
AuthContext.displayName = 'AuthContext'

function AuthProvider({children}: {children: React.ReactNode}) {
  const {state: user, setState: setUser} = useLocalStorageState<
    UserType | null | undefined
  >('__portfolio_user__', null)

  const [selectedProject, setProject] = React.useState<Project | undefined>()

  React.useEffect(() => {
    if (!auth?.currentUser) return
    function verifyCurrentUserCredentials(userArg: typeof user) {
      firebase.auth().onAuthStateChanged(currentUser => {
        if (currentUser && currentUser.uid !== userArg?.uid) {
          setUser(currentUser)
        }
      })
    }
    verifyCurrentUserCredentials(user)
  }, [user, setUser])

  const value = {
    user,
    setUser,
    selectedProject,
    setProject,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

function useAuth() {
  const {
    user,
    setUser,
    selectedProject,
    setProject,
  } = React.useContext<Context>(AuthContext)

  if (
    // eslint-disable-next-line no-constant-condition
    !{
      user,
      setUser,
      selectedProject,
      setProject,
    }
  ) {
    throw new Error('"useAuth" should be used inside "AuthProvider"')
  }
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
          (err: Error) => {
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

  async function createNewUser(newUser: NewUser) {
    const response: {user: UserType | null; error: Error | undefined} = {
      user: null,
      error: undefined,
    }

    await auth
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
          response.user = resp.user
          toast.success(`Welcome "${newUser.email}" to The Club`)
        },
        (err: Error) => {
          response.error = err
        },
      )
    return response
  }
  return {
    useVerifyUserSignInCredentials,
    signUserOut,
    createNewUser,
    user,
    setUser,
    selectedProject,
    setProject,
  }
}

export {AuthProvider, useAuth}
