import * as React from 'react'

import {useClientFetch} from '../../utils/apis'
import Layout from '../Layout'
import About from './About/About'
const Projects = React.lazy(() => import('../Projects/Projects'))
const ContactMe = React.lazy(() => import('./ContactMe/ContactMe'))

function Home() {
  const projectsData = useClientFetch({collection: 'projects'})

  return (
    <Layout>
      <About />
      <React.Suspense fallback={<span>Loading Projects...</span>}>
        <Projects projectsData={projectsData} />
      </React.Suspense>
      <React.Suspense fallback={<span>Loading Form...</span>}>
        <ContactMe />
      </React.Suspense>
    </Layout>
  )
}

export default Home
