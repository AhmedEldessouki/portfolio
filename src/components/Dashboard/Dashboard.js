/** @jsx jsx */

import {jsx} from '@emotion/core'
import {Fragment} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

import {spinner} from '../../Styles'
import Projects from '../Home/Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = ({isSubmitting, projectsData, messagesData}) => {
  return (
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
  )
}

const mapStateToProps = state => {
  return {
    projectsData: state.firestore.ordered.projects,
    isSubmitting: state.firebase.profile.isLoaded,
    messagesData: state.firestore.ordered.contactedMe,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'contactedMe', orderBy: ['sentAt', 'desc']}]),
)(Dashboard)
