import * as React from 'react'

import Layout from '../Layout'

import About from './About/About'
const Projects = React.lazy(() => import('../Projects/Projects'))
const ContactMe = React.lazy(() => import('./ContactMe/ContactMe'))

function Home() {
  return (
    <Layout>
      <About />
      <React.Suspense fallback={<div>loading...</div>}>
        <Projects />
        <ContactMe />
      </React.Suspense>
    </Layout>
  )
}

export default Home
