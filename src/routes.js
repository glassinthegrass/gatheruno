import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Component/Login/Login'
import Birthday from './Component/Birthday/Birthday'
import People from './Component/People/People'
import Profile from './Component/Profile/Profile'


export default (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/people" component={People} />
    <Route exact path="/birthday" component={Birthday} />
    <Route exact path="/user" component={Profile} />
  </Switch>
)
