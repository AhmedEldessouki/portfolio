import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import WriteProject from '../../Routes/WriteProject'
import PageNotFound from '../../Routes/PageNotFound'
import SignUp from '../../Routes/SignUp'
import TagsControl from '../../Routes/TagsControl'
import Dashboard from '../../Routes/Dashboard'
import Home from '../../Routes/Home'

function AuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/create-project" component={WriteProject} />
      <Route path="/tags-control" component={TagsControl} />
      <Route path="/edit/:id" component={WriteProject} />
      <Redirect from="/signin" to="/" />
      <Route from="*" to="/" component={PageNotFound} />
    </Switch>
  )
}

export default AuthRoutes
