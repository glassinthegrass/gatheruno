import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAllPeople} from '../../ducks/birthdayReducer';
import {requestUser} from '../../ducks/userReducer';

class People extends Component{
constructor(props){
    super(props)
    this.state ={
        people:[]
    }
}
componentDidMount(){
    // if(!this.props.userReducer.isLoggedIn){
    //     this.props.history.push('/')
    // }

    this.props.getAllPeople()
    
}

render(){
    console.log(this.props)
return(
<div>
    asdf
</div>
)
}
}


const mapStateToProps = reduxState => {
return reduxState

}
export default connect(mapStateToProps,{ getAllPeople,requestUser})(People)