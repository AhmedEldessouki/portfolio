import * as React from 'react'
import {Global} from '@emotion/react'
import {ToastContainer} from 'react-toastify'

import {globalStyles} from './Styles'

import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import AuthNavlinks from './Navigation/AuthNavlinks'
import {useAuth} from './Utils/AuthProvider'

import './Styles/layout.css'

const MyFooter = React.lazy(() => import('./MyFooter/MyFooter'))

function LayoutX({children}) {
  const {authData} = useAuth()

  return (
    <>
      {authData ? <AuthNavlinks /> : <UnAuthNavlinks />}
      <Global styles={globalStyles} />
      {children}
      <React.Suspense fallback={<h1>'loading...'</h1>}>
        <MyFooter />
      </React.Suspense>
      <ToastContainer autoClose={2000} />
    </>
  )
}
const Layout = React.memo(LayoutX)
export default Layout
