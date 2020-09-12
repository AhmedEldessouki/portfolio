import React, { useState, useEffect } from 'react'
import { Global } from '@emotion/core'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import '../Styles/layout.css'
import { globalStyles } from '../Styles'
import MyFooter from './Home/MyFooter/MyFooter'
import AuthNavlinks from './Navigation/AuthNavlinks'
import UnAuthNavlinks from './Navigation/UnAuthNavlinks'

function Layout({ children, auth, profile }) {
  const [links, setLinks] = useState(null)
  useEffect(() => {
    setLinks(auth.uid ? <AuthNavlinks profile={profile} /> : <UnAuthNavlinks />)
  }, [auth.uid, profile])

  return (
    <>
      <header>{links}</header>
      <Global styles={globalStyles} />
      <main>{children}</main>
      <MyFooter />
    </>
  )
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(Layout)
