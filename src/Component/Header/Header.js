import React, {Component} from 'react'
import {connect} from 'react-redux'
import {requestUser,logoutUser} from '../../ducks/userReducer'
import { Link } from 'react-router-dom'

import bee from '../Login/BeeLogoFull.png'
import './header.css'


// We'll also want the img to be clickable and take the user to landing

class Header extends Component{
  handleLogout = () => {
    this.props.logoutUser()
  }
  render(){
    console.log(this.props)
    const {userReducer} = this.props
  return (
      <header id='header'>
          <div>
      <Link className="linkBirthday" to="/">
        <img
          src={bee}
          alt="logo"
          id='homeIcon'
        />
      </Link>
      {userReducer.isLoggedin ? <h2>Hi {userReducer.user.first_name}</h2> : <p> </p>}
      </div>


      <section id='routes'>
<Link id='linkPeople' to='/'>
    <h2 id='linkPeopleText'>People</h2>
</Link>


<Link to='/'onClick={()=>this.handleLogout()} >logout</Link>

     

    <div id="profileToggle">
        <h2 id='profileText'>Profile</h2> 

  

        <Link id='linkProfile' to='/profile'>
        <h2 id='profileLink'>Profile</h2>
        </Link>
     
    </div>
    <nav id='backandforth'>

<div  className="arrow-left"></div>

<div className="arrow-right"></div>
</nav>
    
</section>
    </header>
  )
}
}

const mapStateToProps = reduxState => {
  return reduxState

  
  }
export default connect(mapStateToProps,{logoutUser,requestUser})(Header)
