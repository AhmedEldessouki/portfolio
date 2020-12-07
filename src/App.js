import * as React from 'react'
import {useAuth} from './components/Utils/AuthProvider'

import 'react-toastify/dist/ReactToastify.css'
const AuthRoutes = React.lazy(() =>
  import(/* webpackPrefetch: true */ './components/Routes/AuthRoutes'),
)
const UnAuthRoutes = React.lazy(() =>
  import('./components/Routes/UnAuthRoutes'),
)

function App() {
  const {authData} = useAuth()
  return (
    <React.Suspense fallback={'loading...'}>
      {authData ? <AuthRoutes /> : <UnAuthRoutes />}
    </React.Suspense>
  )
}

export default App
