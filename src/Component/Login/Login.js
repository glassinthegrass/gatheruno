

import React, {Component }from 'react';
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/userReducer'
import bee from './BeeLogoFull.png'
import './Login.css'


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:'',
            resData:''
        }
    }
componentDidUpdate(){
if(this.props.userReducer.isLoggedIn) {
    this.props.history.push('/birthday')
}
}

render(){
  const {email,password} = this.state
  console.log(this.props)
    return(
        <div>
            <section>
                <img id='beeLogo' src={bee} alt='beelogo'/>
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
export default connect(mapStateToProps,{loginUser})(Login)

