import React from 'react'

import Projects from '../Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = () => {
  return (
    <Layout>
      <Projects />
      <Messages />
    </Layout>
  )
}

export default Dashboard
