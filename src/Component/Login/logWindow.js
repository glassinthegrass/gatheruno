

import React, {Component }from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/userReducer'

import './Login.css'


class LoginWindow extends Component{
    constructor(props){
        super()
        this.state={
            email:'',
            password:''
        }
    }

render(){
  const {email,password} = this.state
  console.log(this.props)
    return(
        <div>
            
            <section>
                <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} type='email' placeholder='Enter Email'></input>
                <input onChange={(e)=> this.setState({password: e.target.value})} value={this.state.password}type='password' placeholder='Enter Password'></input>
                <button onClick={()=>this.props.loginUser(email,password)} type='submit'>Login</button>
            </section>
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{loginUser})(LoginWindow)