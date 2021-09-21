import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'

import WriteProject from '../../Routes/AuthRoutes/WriteProject'
import PageNotFound from '../../Routes/PageNotFound'
import SignUp from '../../Routes/AuthRoutes/SignUp'
import TagsControl from '../../Routes/AuthRoutes/TagsControl'
import Dashboard from '../../Routes/AuthRoutes/Dashboard'
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
      <Route path="/404" component={PageNotFound} />
      <Redirect from="/signin" to="/" />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export default AuthRoutes
