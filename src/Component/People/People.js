
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPeople} from '../../ducks/personReducer';
import {requestUser} from '../../ducks/userReducer';
import Person from './Person'
import './People.css'







const People =(props)=>{
    const {people} = props

    let mappedPeople = people.map((person, i) => {
        return(
        <Person id='personComponent'key={i} person={person} render={()=> <Person/>}/>
      )
    });
return(

<div id='mappedPerson'>
    {mappedPeople} 
</div>

)
}


const mapStateToProps = reduxState => {
return (
    reduxState
    )
}
export default connect(mapStateToProps,{getAllPeople,requestUser})(People)