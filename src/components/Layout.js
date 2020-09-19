/* eslint-disable import/order */
import React, {useState, useEffect} from 'react'
import {Global} from '@emotion/core'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import PropTypes from 'prop-types'

import {globalStyles} from '../Styles'

import UnAuthNavlinks from './Navigation/UnAuthNavlinks'
import MyFooter from './Home/MyFooter/MyFooter'
import AuthNavlinks from './Navigation/AuthNavlinks'

import '../Styles/layout.css'

function Layout({children, auth}) {
  const [links, setLinks] = useState(null)
  useEffect(() => {
    setLinks(auth.uid ? <AuthNavlinks /> : <UnAuthNavlinks />)
  }, [auth.uid])

  return (
    <>
      <header>{links}</header>
      <Global styles={globalStyles} />
      <main>{children}</main>
      <MyFooter />
    </>
  )
}

Layout.prototype = {
  children: PropTypes.node.isRequired,
  auth: PropTypes.object,
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'projects', orderBy: ['createdAt', 'desc']}]),
)(Layout)
