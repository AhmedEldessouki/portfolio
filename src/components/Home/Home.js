import * as React from 'react'

import {useProjects} from '../../utils/project-api'
import Layout from '../Layout'
import About from './About/About'
const Projects = React.lazy(() => import('../Projects/Projects'))
const ContactMe = React.lazy(() => import('./ContactMe/ContactMe'))

function Home() {
  const projectsData = useProjects()
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
