import React, {Component} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import './Birthday.css'


class Birthday extends Component {
componentDidUpdate(){
   
        if(this.props.userReducer.user.isLoggedIn) {
            this.props.history.push('/')
        }
    }
render(){   
    
    return(
        <div id='birthday'>
       <div>
           <h1>Happy Birhday Crazy!</h1>
       </div>
        </div>
    )
}
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(Birthday)