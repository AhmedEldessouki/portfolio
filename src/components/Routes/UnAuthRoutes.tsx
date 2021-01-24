import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../Home/Home'
import SignIn from '../Auth/SignIn'
import PageNotFound from '../PageNotFound'

function UnAuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route from="*" to="/" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default UnAuthRoutes
