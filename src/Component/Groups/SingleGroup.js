
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'



class SingleGroup extends Component {
    constructor(){
        super()
        this.state ={
            id: 0,
            groupName:""
        }
    }


render(){
    const {group_name} = this.props.groups
    console.log(group_name)
    return(
        <div id='group' onClick={()=> this.props.handleClick(group_name)}>
            {group_name}
        </div>
    )
}
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(SingleGroup)