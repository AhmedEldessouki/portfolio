/** @jsx jsx */

import {jsx} from '@emotion/core'
import {Fragment} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

import {spinner} from '../../Styles'
import Projects from '../Home/Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = ({isSubmitting, auth, projectsData, messagesData}) => {
  return auth.uid ? (
    <Layout>
      {isSubmitting ? (
        <Fragment>
          <Projects projectsData={projectsData} />
          <Messages messagesData={messagesData} />
        </Fragment>
      ) : (
        <div css={spinner} />
      )}
    </Layout>
  ) : (
    <Redirect to="/signin" />
  )
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
