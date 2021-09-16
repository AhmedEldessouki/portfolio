import React from 'react'

import {useClientFetch} from '../../Utils/apis'
import Projects from '../../components/Projects/Projects'

import type {Message, ProjectInterface} from '../../../types/interfaces'
import Messages from '../../components/Messaging/Messages'

const Dashboard = () => {
  const projectsData = useClientFetch('projects') as Array<ProjectInterface>
  const messagesData = useClientFetch('contactedMe') as Array<Message>
  return (
    <main>
      <Projects projectsData={projectsData} />
      <Messages messagesData={messagesData} />
    </main>
  )
}

export default Dashboard
