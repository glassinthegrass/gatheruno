import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Component/Login/Login'
import Birthday from './Component/Birthday/Birthday'
import Profile from './Component/Profile/Profile'


export default (
  <Switch>
    <Route exact path="/"  render={() =><Login />} />
    <Route path="/birthday" render={() =><Birthday />}/>
    <Route path="/user" component={Profile} />
  </Switch>
)
