/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react'
import {Fragment} from 'react'

import {spinner} from '../../Styles'
import Projects from '../Projects/Projects'
import Layout from '../Layout'

import Messages from './Messaging/Messages'

const Dashboard = () => {
  const projectsData = [
    {
      id: 'jHvH1uybIu24wgKia3ru',
      description:
        "If You're Wondering About What i Have Been Doing. Then Check This Is The Staging App for My Coming Soon Portfolio.",
      projectLink: 'https://ahmedeldessouki.herokuapp.com/',
      projectName: 'Portfolio V2',
      createdAt: {
        seconds: 1600255260,
        nanoseconds: 74000000,
      },
      projectLogo: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1600255119/giedcmmhut9yqspub5vx.png',
      ],
    },
    {
      id: 'jHu24wgKia3ru',
      description:
        "If You're Wondering About What i Have Been Doing. Then Check This Is The Staging App for My Coming Soon Portfolio.",
      projectLink: 'https://ahmedeldessouki.herokuapp.com/',
      projectName: 'Portfolio V2',
      createdAt: {
        seconds: 1600255260,
        nanoseconds: 74000000,
      },
      projectLogo: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1600255119/giedcmmhut9yqspub5vx.png',
      ],
    },
  ]
  const messagesData = {}

  return (
    <Layout>
      {false ? (
        <div css={spinner} />
      ) : (
        <Fragment>
          <Projects projectsData={projectsData} />
          <Messages messagesData={messagesData} />
        </Fragment>
      )}
    </Layout>
  )
}

export default Dashboard
