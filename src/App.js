import * as React from 'react'
import {ToastContainer} from 'react-toastify'

import {auth} from './Config/firebase'
import AuthRoutes from './components/Routes/AuthRoutes'
import UnAuthRoutes from './components/Routes/UnAuthRoutes'
import {useAuth} from './components/Utils/AuthProvider'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {authData, setAuthData} = useAuth()
  const currentUser = auth.currentUser
  React.useEffect(() => {
    console.log(currentUser)
    // setInterval(() => setAuthData(currentUser?.uid), 3000)
    //   db.collection('projects')
    //     .get()
    //     .then(querySnapshot => {
    //       const data = querySnapshot.docs.map(doc => doc.data())
    //       console.log(data) // array of cities objects
    //     })
    //     .catch(e => console.log(e))
    //   db.collection('contactedMe')
    //     .get()
    //     .then(querySnapshot => {
    //       const r = querySnapshot.docs.map(doc => doc.data())
    //       console.log(r) // array of cities objects
    //     })
    //   auth.signInWithEmailAndPassword('nemoahmed534@gmail.com', '123789').then(
    //     r => console.log(r),
    //     e => console.log(e),
    //   )
    //   setTimeout(() => {
    //     auth.signOut()
    //   }, 3000)
  }, [currentUser, setAuthData])

  return (
    <>
      {authData ? <AuthRoutes /> : <UnAuthRoutes />}
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
