import * as React from 'react'
import {Global} from '@emotion/react'
import {ToastContainer} from 'react-toastify'
import {QueryCache, ReactQueryCacheProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query-devtools'

import {globalStyles} from './Styles'

import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
// import MyFooter from './MyFooter/MyFooter'
import AuthNavlinks from './Navigation/AuthNavlinks'
import {useAuth} from './Utils/AuthProvider'

import './Styles/layout.css'

const MyFooter = React.lazy(() => import('./MyFooter/MyFooter'))

const queryCache = new QueryCache()

function LayoutX({children}) {
  const {authData} = useAuth()

  return (
    <>
      {authData ? <AuthNavlinks /> : <UnAuthNavlinks />}
      <Global styles={globalStyles} />
      <ReactQueryCacheProvider queryCache={queryCache}>
        {children}
      </ReactQueryCacheProvider>
      <React.Suspense fallback={'loading...'}>
        <MyFooter />
      </React.Suspense>
      <ToastContainer autoClose={2000} />
      <ReactQueryDevtools />
    </>
  )
}
const Layout = React.memo(LayoutX)
export default Layout
