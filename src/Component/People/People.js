
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPeople} from '../../ducks/personReducer';
import {requestUser} from '../../ducks/userReducer';
import Person from './Person'
class People extends Component{
    constructor(){
        super()
        this.state={
            id:0
        }
    }
render(){
    const {people} =this.props

    console.log(people)
    let mappedPeople = people.map((person, i) => {
        return(
        <Person id='personComponent'key={i} person={person} render={()=> <Person/>}/>
      )
    });
return(
<section>
<div id='mappedPerson'>
    {mappedPeople} 
</div>
<aside id='peopleAside'>

</aside>
</section>
)
}
}


const mapStateToProps = reduxState => {
return (
    reduxState
    )
}
export default connect(mapStateToProps,{getAllPeople,requestUser})(People)