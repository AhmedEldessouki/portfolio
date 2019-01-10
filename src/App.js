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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {

  componentDidMount(){
    document.title = "Ahmed ElDessouki"
    // document.body.style.overflow = "overlay"
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/projects/:id' component={ProjectDetails}/>
          <Route path='/messages/:id' component={MessageDetails}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/create-project' component={CreateProject}/>
          <Route path='/edit/:id' component={CreateProject}/>
          <Redirect from="*" to="/" />
        </Switch>
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
