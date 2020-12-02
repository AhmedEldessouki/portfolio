import * as React from 'react'
import {Global} from '@emotion/react'

import {globalStyles} from '../Styles'

import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import MyFooter from './Home/MyFooter/MyFooter'
import AuthNavlinks from './Navigation/AuthNavlinks'
import {useAuth} from './Utils/AuthProvider'

import '../Styles/layout.css'

function LayoutX({children}) {
  const {authData} = useAuth()

  return (
    <>
      <header>{authData ? <AuthNavlinks /> : <UnAuthNavlinks />}</header>
      <Global styles={globalStyles} />
      <main>{children}</main>
      <MyFooter />
    </>
  )
}
const Layout = React.memo(LayoutX)
export default Layout
