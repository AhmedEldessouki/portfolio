import React from 'react'
import About from './About/About'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import ScrollUpButton from 'react-scroll-up-button'
import {connect} from 'react-redux'

import Layout from '../Layout'

function Home({projectsData}) {
  return (
    <Layout>
      <About />
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      />
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
