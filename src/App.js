import React, {useEffect} from 'react'
import Home from './components/Home/Home'
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import MessageDetails from './components/Dashboard/Messaging/MessageDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import ProjectDetails from './components/Home/Projects/ProjectDetails'
import CreateProject from './components/Home/Projects/CreateProject'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  useEffect(() => {
    document.title = 'Ahmed Eldessouki'
  })

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route path="/messages/:id" component={MessageDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/create-project" component={CreateProject} />
          <Route path="/edit/:id" component={CreateProject} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
      <ToastContainer autoClose={2000} />
    </>
  )
}

export default App
