import React, { Component } from 'react';
import './Home.scss';
import MyInfo from './MyInfo/MyInfo'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import MyFooter from './MyFooter/MyFooter'
import { ScrollSpy, Link } from './SpyScroll/ScrollSpy'
import ScrollUpButton from "react-scroll-up-button";
import {connect} from 'react-redux'
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase'
import {compose} from 'redux'
import AuthNavlinks from '../Navigation/AuthNavlinks'
// import Navlinks from '../Navigation/Navlinks'

class Home extends Component {
  constructor (props){
    super (props);
    this.state = {
      intervalId: 0
    }
    this.scrollStep = this.scrollStep.bind(this)
    this.scrollToTop= this.scrollToTop.bind(this)
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  render() {
    const {projectsData, auth, profile} = this.props;
    const links = auth.uid ? <AuthNavlinks profile={profile}/> : null //<Navlinks/>
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
            {links}
          </div>
          {/* <MyNav /> */}
          <MyInfo />
        </header>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={-1}
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
  console.log(state)
  return{
    projectsData: state.firestore.ordered.projects,
    auth:state.firebase.auth,
    profile: state.firebase.profile
  }
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'},
    // {storage:'projectLogo'}
  ])
  // ,firebaseConnect([
  //   {storage: 'projectLogo'}
  // ])
)(Home)
