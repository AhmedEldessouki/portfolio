import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import SignIn from '../../Routes/SignIn'
import PageNotFound from '../../Routes/PageNotFound'
import Home from '../../Routes/Home'
import SignUp from '../../Routes/AuthRoutes/SignUp'

function UnAuthRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signUp" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/404" component={PageNotFound} />
      <Redirect from="*" to="/404" />
    </Switch>
  )
}

export default UnAuthRoutes
