import * as React from 'react'

import {useClientFetch} from '../Utils/apis'
import type {Project} from '../../types/interfaces'
import About from '../components/About/About'

const Projects = React.lazy(() => import('../components/Projects/Projects'))
const ContactForm = React.lazy(
  () => import('../components/ContactMe/ContactForm'),
)

function Home() {
  const projectsData = useClientFetch('projects') as Array<Project>

  return (
    <main>
      <About />
      <React.Suspense fallback={<span>Loading Projects...</span>}>
        <Projects projectsData={projectsData} />
      </React.Suspense>
      <React.Suspense fallback={<span>Loading Form...</span>}>
        <ContactForm />
      </React.Suspense>
    </main>
  )
}

export default Home
