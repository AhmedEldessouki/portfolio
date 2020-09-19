/* eslint-disable import/order */
/* eslint-disable react/jsx-fragments */
/** @jsx jsx */

import {jsx} from '@emotion/core'
import {Fragment} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'

import {spinner} from '../../Styles'
import Projects from '../Home/Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = ({isSubmitting, auth, projectsData, messagesData}) => {
  return (
    <Fragment>
      {!auth.uid ? (
        <Redirect to="/signin" />
      ) : (
        <Layout>
          {!isSubmitting ? (
            <div css={spinner} />
          ) : (
            <Fragment>
              <Projects projectsData={projectsData} />
              <Messages messagesData={messagesData} />
            </Fragment>
          )}
        </Layout>
      )}
    </Fragment>
  )
}

Dashboard.prototype = {
  isSubmitting: PropTypes.bool,
  auth: PropTypes.object.isRequired,
  projectsData: PropTypes.object.isRequired,
  messagesData: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    projectsData: state.firestore.ordered.projects,
    isSubmitting: state.firebase.profile.isLoaded,
    messagesData: state.firestore.ordered.contactedMe,
    auth: state.firebase.auth,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'contactedMe', orderBy: ['sentAt', 'desc']}]),
)(Dashboard)
