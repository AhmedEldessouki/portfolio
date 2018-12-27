import React, { Component } from 'react';
import './App.scss';
import Home from './componant/Home/Home'
import {Route,Switch, Redirect} from 'react-router-dom'
import Dashboard from './componant/Dashboard/Dashboard';
import MessageDetails from './componant/Dashboard/Messaging/MessageDetails';
import SignIn from './componant/Auth/SignIn';
import SignUp from './componant/Auth/SignUp';
import ProjectDetails from './componant/Home/Projects/ProjectDetails'
import CreateProject from './componant/Home/Projects/CreateProject'
import { Scrollbars } from 'react-custom-scrollbars';

let lastScrollY = 0;
let ticking = false;

class App extends Component {
  constructor (){
    super()
    this.state = {

    }
    // this.handleScroll = this.handleScroll().bind(this)
  }
  componentDidMount(){
    document.title = "Ahmed ElDessouki"
    const {scrollbar} = this.refs;
    scrollbar.scrollTop(100); // 100px
    document.body.style.overflow = "hidden"
  }
  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      ticking = true;
    }
  };
  render() {
    return (
      <div className="App">
        <Scrollbars
          ref='scrollbar'
          autoHeight
          autoHeightMin={632}
        >
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/projects/:id' component={ProjectDetails}/>
            <Route path='/messages/:id' component={MessageDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/SignUp' component={SignUp}/>
            <Route path='/CreateProject' component={CreateProject}/>
            <Redirect from="*" to="/" />
          </Switch>
        </Scrollbars>
      </div>
    );
  }
}

export default App;
