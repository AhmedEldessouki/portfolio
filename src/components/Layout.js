import * as React from 'react'
import {Global} from '@emotion/react'
import {ToastContainer} from 'react-toastify'

import {useAuth} from '../context/AuthProvider'
import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import AuthNavlinks from './Navigation/AuthNavlinks'
import {globalStyles} from './Styles'

import './Styles/layout.css'

const MyFooter = React.lazy(() => import('./MyFooter/MyFooter'))

function LayoutX({children, height = '82vh'}) {
  const {authData} = useAuth()
  return (
    <>
      {authData ? <AuthNavlinks /> : <UnAuthNavlinks />}
      <Global styles={globalStyles} />
      <div style={{minHeight: height}}>{children}</div>
      <React.Suspense fallback={<h1>'loading...'</h1>}>
        <MyFooter />
      </React.Suspense>
      <ToastContainer autoClose={2000} />
    </>
  )
}
const Layout = React.memo(LayoutX)
export default Layout
