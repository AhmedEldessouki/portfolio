import * as React from 'react'
import {config} from 'dotenv'

import {useAuth} from './context/AuthProvider'
import AuthRoutes from './components/Routes/AuthRoutes'
import UnAuthRoutes from './components/Routes/UnAuthRoutes'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {user} = useAuth()
  config({debug: process.env.DEBUG})

  return user ? <AuthRoutes /> : <UnAuthRoutes />
}

export default App
