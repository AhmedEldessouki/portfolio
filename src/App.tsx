import * as React from 'react'
// import {config} from 'dotenv'
import {BrowserRouter as Router} from 'react-router-dom'
import {Global} from '@emotion/react'
import {ToastContainer} from 'react-toastify'

import {useAuth} from './context/AuthProvider'
import AuthRoutes from './Utils/routes/AuthRoutes'
import UnAuthRoutes from './Utils/routes/UnAuthRoutes'
import AuthNavlinks from './components/Navigation/AuthNavlinks'
import UnAuthNavlinks from './components/Navigation/UnAuthNavlinks'
import {globalStyles} from './Styles'

import 'react-toastify/dist/ReactToastify.css'

const MyFooter = React.lazy(() => import('./components/MyFooter/MyFooter'))
function App() {
  const {user} = useAuth()
  // config({debug: process.env.DEBUG})

  return (
    <>
      <Router>
        {user ? (
          <>
            <AuthNavlinks />
            <AuthRoutes />
          </>
        ) : (
          <>
            <UnAuthNavlinks />
            <UnAuthRoutes />
          </>
        )}
        <React.Suspense fallback={<h1>Loading Footer...</h1>}>
          <MyFooter />
        </React.Suspense>
      </Router>
      <Global styles={globalStyles} />
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
