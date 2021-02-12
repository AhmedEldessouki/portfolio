import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import CreateProject from './CreateProject'
import PageNotFound from './PageNotFound'
import SignUp from './SignUp'
import TagsControl from './TagsControl'
import Dashboard from './Dashboard'
import Home from './Home'

function AuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/create-project" component={CreateProject} />
      <Route path="/tags-control" component={TagsControl} />
      <Route path="/edit/:id" component={CreateProject} />
      <Redirect from="/signin" to="/" />
      <Route from="*" to="/" component={PageNotFound} />
    </Switch>
  )
}

export default AuthRoutes
