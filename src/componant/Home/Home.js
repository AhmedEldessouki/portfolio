import React, { Component } from 'react';
import './Home.scss';
import MyInfo from './MyInfo/MyInfo'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import MyFooter from './MyFooter/MyFooter'
import { ScrollSpy, Link } from './SpyScroll/ScrollSpy'
import ScrollUpButton from "react-scroll-up-button";
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class Home extends Component {
  componentDidMount(){
    document.title = "Ahmed ElDessouki"
  }
  render() {
    const {projectsData} = this.props
    return (
      <div className="Home">
        <header className="Home-header" id="1">
        <div className="myNav-container">
          <div className="my-name">
          <span>Nemo Adam</span>
          </div>
          <div className="scroll-spy">
            <ScrollSpy>
              <Link className="scroll-spy-item" ref={c => this._firstLink = c} section="1">Home</Link>
              <Link className="scroll-spy-item" section="2">Projects</Link>
              <Link className="scroll-spy-item" section="3">Contact Me</Link>
            </ScrollSpy>
          </div>
        </div>
          {/* <MyNav /> */}
          <MyInfo />
        </header>
        <ScrollUpButton
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        ContainerClassName='ScrollUpButton__Container'
        TransitionClassName='ScrollUpButton__Toggled'
         />
        <main id="2">
        <Projects projectsData={projectsData}/>
        </main>
        <footer id="3">
          <ContactMe />
          <MyFooter />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('projects', state.firestore.ordered.projects)
  return{
      projectsData: state.firestore.ordered.projects
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
      {collection: 'projects'}
  ])
  )(Home)
