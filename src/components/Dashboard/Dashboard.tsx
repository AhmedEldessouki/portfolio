import React from 'react'

import {useClientFetch} from '../Utils/apis'
import Projects from '../Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = () => {
  const projectsData = useClientFetch({collection: 'projects'})
  const messagesData = useClientFetch({collection: 'contactedMe'})
  return (
    <Layout>
      <Projects projectsData={projectsData} />
      <Messages messagesData={messagesData} />
    </Layout>
  )
}

export default Dashboard
