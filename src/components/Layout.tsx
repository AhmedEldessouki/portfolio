import * as React from 'react'
import {Global} from '@emotion/react'
import {ToastContainer} from 'react-toastify'

import {useAuth} from '../context/AuthProvider'
import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import AuthNavlinks from './Navigation/AuthNavlinks'
import {globalStyles} from './Styles'

import './Styles/layout.css'

const MyFooter = React.lazy(() => import('./MyFooter/MyFooter'))

interface LayoutXProps {
  children: React.ReactNode
  height: string
}

function LayoutX({children, height = '82vh'}: LayoutXProps) {
  const {user} = useAuth()
  return (
    <>
      {user ? <AuthNavlinks /> : <UnAuthNavlinks />}
      <Global styles={globalStyles} />
      <div style={{minHeight: height}}>{children}</div>
      <React.Suspense fallback={<h1>Loading Footer...</h1>}>
        <MyFooter />
      </React.Suspense>
      <ToastContainer autoClose={2000} />
    </>
  )
}
const Layout = React.memo(LayoutX)
export default Layout
