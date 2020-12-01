import * as React from 'react'
import {ToastContainer} from 'react-toastify'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools'

import {useAuth} from './components/Utils/AuthProvider'

import AuthRoutes from './components/Routes/AuthRoutes'
import UnAuthRoutes from './components/Routes/UnAuthRoutes'

import 'react-toastify/dist/ReactToastify.css'
// const AuthRoutes = React.lazy(() =>
//   import(/* webpackPrefetch: true */ './components/Routes/AuthRoutes'),
// )
// const UnAuthRoutes = React.lazy(() =>
//   import('./components/Routes/UnAuthRoutes'),
// )
const queryCache = new QueryCache()

function App() {
  const {authData} = useAuth()
  return (
    <>
      <ReactQueryCacheProvider queryCache={queryCache}>
        {authData ? <AuthRoutes /> : <UnAuthRoutes />}
      </ReactQueryCacheProvider>
      <ToastContainer autoClose={2000} />
      <ReactQueryDevtools />
    </>
  )
}

export default App
