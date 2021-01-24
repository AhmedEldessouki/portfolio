import React from 'react'

import {useClientFetch} from '../Utils/apis'
import Projects from '../Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'
import type {Message, Project} from '../Utils/interfaces'

const Dashboard = () => {
  const projectsData = useClientFetch('projects') as Array<Project>
  const messagesData = useClientFetch('contactedMe') as Array<Message>
  return (
    <Layout>
      <Projects projectsData={projectsData} />
      <Messages messagesData={messagesData} />
    </Layout>
  )
}

export default Dashboard
