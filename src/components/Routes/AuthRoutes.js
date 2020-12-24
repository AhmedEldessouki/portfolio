import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Home from '../Home/Home'
import Dashboard from '../Dashboard/Dashboard'
import MessageDetails from '../Dashboard/Messaging/MessageDetails'
import SignUp from '../Auth/SignUp'
import CreateProject from '../Projects/CreateProject'
import PageNotFound from '../PageNotFound'
import TagsControl from '../TagsControl'

function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/message/:id" component={MessageDetails} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/create-project" component={CreateProject} />
        <Route path="/tags" component={TagsControl} />
        <Route path="/edit/:id" component={CreateProject} />
        <Redirect from="/signin" to="/" />
        <Route from="*" to="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes
