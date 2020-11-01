import * as React from 'react'
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'

import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import MessageDetails from './components/Dashboard/Messaging/MessageDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/Home/Projects/CreateProject'

import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      {false ? (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/message/:id" component={MessageDetails} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/create-project" component={CreateProject} />
            <Route path="/edit/:id" component={CreateProject} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signin" component={SignIn} />
            <Redirect from="*" to="/" />
          </Switch>
        </BrowserRouter>
      )}

      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
