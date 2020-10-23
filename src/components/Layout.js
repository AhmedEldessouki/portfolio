import React, {useState, useEffect} from 'react'
import {Global} from '@emotion/core'

import {globalStyles} from '../Styles'

import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import MyFooter from './Home/MyFooter/MyFooter'
import AuthNavlinks from './Navigation/AuthNavlinks'

import '../Styles/layout.css'

function Layout({children}) {
  const [links, setLinks] = useState(null)
  useEffect(() => {
    setLinks(false ? <AuthNavlinks /> : <UnAuthNavlinks />)
  }, [])

  return (
    <>
      <header>{links}</header>
      <Global styles={globalStyles} />
      <main>{children}</main>
      <MyFooter />
    </>
  )
}

export default Layout
