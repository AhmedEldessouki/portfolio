import * as React from 'react'

import Layout from '../Layout'

import About from './About/About'
const Projects = React.lazy(() => import('./Projects/Projects'))
const ContactMe = React.lazy(() => import('./ContactMe/ContactMe'))

function Home() {
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
      projectName: 'Portfolio V1',
      createdAt: {
        seconds: 1600255260,
        nanoseconds: 74000000,
      },
      projectLogo: [
        'https://res.cloudinary.com/ahmedeldessouki/image/upload/v1600255119/giedcmmhut9yqspub5vx.png',
      ],
    },
  ]
  return (
    <Layout>
      <About />
      <React.Suspense fallback={<div>loading...</div>}>
        <Projects projectsData={projectsData} />
        <ContactMe />
      </React.Suspense>
    </Layout>
  )
}

export default Home
