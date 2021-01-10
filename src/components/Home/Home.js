import * as React from 'react'

import {useClientFetch} from '../Utils/apis'
import Layout from '../Layout'
import About from './About/About'
const Projects = React.lazy(() => import('../Projects/Projects'))
const ContactForm = React.lazy(() => import('./ContactMe/ContactForm'))

function Home() {
  const projectsData = useClientFetch({collection: 'projects'})

  return (
    <Layout>
      <About />
      <React.Suspense fallback={<span>Loading Projects...</span>}>
        <Projects projectsData={projectsData} />
      </React.Suspense>
      <React.Suspense fallback={<span>Loading Form...</span>}>
        <ContactForm />
      </React.Suspense>
    </Layout>
  )
}

export default Home
