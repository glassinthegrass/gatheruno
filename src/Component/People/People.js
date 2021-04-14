
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPeople} from '../../ducks/birthdayReducer';
import {requestUser} from '../../ducks/userReducer';
import Person from './Person'
class People extends Component{

render(){
    console.log(this.props) 
    const {people} =this.props
    let mappedPeople = people.map((person, i) => {
        return(
        <Person key={i} person={person} />
      )
    });
return(
<div>
    {mappedPeople}
</div>
)
}
}


const mapStateToProps = reduxState => {
return reduxState

}
export default connect(mapStateToProps,{ getAllPeople,requestUser})(People)