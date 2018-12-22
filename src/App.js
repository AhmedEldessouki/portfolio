import React, { Component } from 'react';
import './App.scss';
import MyInfo from './componant/MyInfo/MyInfo'
import Projects from './componant/Projects/Projects'
import ContactMe from './componant/ContactMe/ContactMe'
import MyFooter from './componant/MyFooter/MyFooter'
import { ScrollSpy, Link } from './componant/SpyScroll/ScrollSpy'
import ScrollUpButton from "react-scroll-up-button";
import { black } from 'ansi-colors';


class App extends Component {
  componentDidMount(){
    document.title = "Ahmed ElDessouki"
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" id="1">
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
          <Projects />
        </main>
        <footer id="3">
          <ContactMe />
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
