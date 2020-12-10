import * as React from 'react'
import {useAuth} from './components/Utils/AuthProvider'

import 'react-toastify/dist/ReactToastify.css'
import {config} from 'dotenv'
import AuthRoutes from './components/Routes/AuthRoutes'

import UnAuthRoutes from './components/Routes/UnAuthRoutes'

function App() {
  const {authData} = useAuth()
  config({debug: process.env.DEBUG})

  return authData ? <AuthRoutes /> : <UnAuthRoutes />
}

export default App
