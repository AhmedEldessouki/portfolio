import React from 'react'

import {useProjects} from '../../utils/project-api'
import Projects from '../Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = () => {
  const projectsData = useProjects()
  return (
    <Layout>
      <Projects projectsData={projectsData} />
      <Messages />
    </Layout>
  )
}

export default Dashboard
