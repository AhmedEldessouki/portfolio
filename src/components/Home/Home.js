import React from 'react'
import {connect} from 'react-redux'

import Layout from '../Layout'

import About from './About/About'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'

function Home({projectsData}) {
  return (
    <Layout>
      <About />
      <Projects projectsData={projectsData} />
      <ContactMe />
    </Layout>
  )
}

const mapStateToProps = state => {
  return {
    projectsData: state.firestore.ordered.projects,
  }
}

export default connect(mapStateToProps)(Home)
