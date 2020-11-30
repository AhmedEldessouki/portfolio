import React from 'react'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import Home from '../Home/Home'
import SignIn from '../Auth/SignIn'

function UnAuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SignIn} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default UnAuthRoutes
