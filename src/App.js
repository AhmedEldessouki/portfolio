import * as React from 'react'
import {useAuth} from './components/Utils/AuthProvider'

import 'react-toastify/dist/ReactToastify.css'
import {config} from 'dotenv'
const AuthRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ './components/Routes/AuthRoutes'),
)
const UnAuthRoutes = React.lazy(() =>
  import('./components/Routes/UnAuthRoutes'),
)

// const result = require('dotenv').config()

function App() {
  const {authData} = useAuth()
  config({debug: process.env.DEBUG})

  // if (result.error) {
  //   throw result.error
  // }

  // console.log(result.parsed)
  return (
    <React.Suspense fallback={'loading...'}>
      {authData ? <AuthRoutes /> : <UnAuthRoutes />}
    </React.Suspense>
  )
}

export default App
