import People from '../People/People'
import LogWindow from './logWindow'
import React, {Component }from 'react';
import {connect} from 'react-redux'
import {requestUser,loginUser} from '../../ducks/userReducer'
import {getAllPeople} from '../../ducks/birthdayReducer'

import './Login.css'
import axios from 'axios';


class Login extends Component{
    constructor(props){
        super()
        this.state = {
            people: [],
            user: {},
            isLoading:false
        }
    }
    componentDidMount(){
    axios.get('/api/people').then(res =>{
           this.setState({people:res.data})
        })
    }
render(){
  console.log(this.props)
    return(
        <div>
            {!this.props.userReducer.user ? <LogWindow /> : <People people={this.state.people}/> }
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{loginUser,requestUser,getAllPeople})(Login)

