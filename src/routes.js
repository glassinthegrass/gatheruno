import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './Component/Login/Login'
import Birthday from './Component/Birthday/Birthday'
import Profile from './Component/Profile/Profile'
import People from './Component/People/People'
import GroupPeople from './Component/Groups/GroupPeople'
import PeopleProfile from './Component/Groups/PeopleProfile'
import Groups from './Component/Groups/Groups'


export default (
  <Switch>
    <Route exact path="/"  render={()=><Login/> } /> 
    <Route exact path="/groups/" render={() =><Groups />}/>
    <Route path="/groups/people" render={() =><GroupPeople />}/>
    <Route path="/people/:id" component={People}/>
    <Route path='/personprofile/:person_id' component={PeopleProfile}/> 
    <Route path="/birthdays" render={() =><Birthday />}/>
    <Route path="/user" render={()=> <Profile />} />
  </Switch>
)
