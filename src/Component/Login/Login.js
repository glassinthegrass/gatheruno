import People from '../People/People'
import LogWindow from './logWindow'
import React, {Component }from 'react';
import {connect} from 'react-redux'
import {requestUser,loginUser} from '../../ducks/userReducer'
import {getAllPeople,getBirthday} from '../../ducks/personReducer'
import BeeWithLine from '../Gather_Line_with_Bee.png'
import './Login.css'


class Login extends Component{
    constructor(){
        super()
        this.state = {
            style:''
        }
    }
    componentDidMount(){
    this.props.getAllPeople()
this.props.getBirthday()
    }

render(){
    return(
<div id='loginComponent'> 
    {this.props.userReducer.user.isLoggedIn ? <div id='ppl' ><People render={()=>this.render()} onClick={()=>this.handleClick()} people={this.props.personReducer.people}/> </div> : <div id='logwindow'>  <LogWindow render={()=>this.render()}/>  </div> }
<img id='beewithline' src={BeeWithLine} alt='BeeWithLine'></img>
    </div>

        )

}
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{loginUser,getBirthday,requestUser,getAllPeople})(Login)

