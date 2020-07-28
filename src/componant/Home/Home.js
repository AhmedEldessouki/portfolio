import React, { useEffect, useState } from 'react'
import './Home.scss'
import MyInfo from './MyInfo/MyInfo'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import MyFooter from './MyFooter/MyFooter'
import ScrollUpButton from 'react-scroll-up-button'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import AuthNavlinks from '../Navigation/AuthNavlinks'
import UnAuthNavlinks from '../Navigation/UnAuthNavlinks'

const Home = ({ projectsData, auth, profile }) => {
  const [links, setLinks] = useState(() => { })

  useEffect(() => {
    setLinks(auth.uid ? <AuthNavlinks profile={profile} /> : <UnAuthNavlinks />)
  }, [auth.uid, profile])

  return (
    <div className="Home">
      <header className="Home-header" id="1">
        {links}
        <MyInfo />
      </header>
      <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType="easeOutCubic"
        AnimationDuration={500}
        ContainerClassName="ScrollUpButton__Container"
        TransitionClassName="ScrollUpButton__Toggled"
      />
      <main id="projects">
        <Projects projectsData={projectsData} />
      </main>
      <footer id="contactMe">
        <ContactMe />
        <MyFooter />
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    projectsData: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects', orderBy: ['createdAt', 'desc'] }])
)(Home)
