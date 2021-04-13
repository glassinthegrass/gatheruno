import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import bee from '../Login/BeeLogoFull.png'
import './header.css'

// We'll also want the img to be clickable and take the user to landing

class Header extends Component{
  render(){
    console.log(this.props)
  return (
      <header id='header'>
          <div>
      <Link className="linkBirthday" to="/birthday">
        <img
          src={bee}
          alt="logo"
          id='homeIcon'
        />
      </Link>
      <nav id='backandforth'>

<div className="arrow-left"></div>

<div className="arrow-right"></div>
</nav>
      </div>


      <section id='routes'>
<Link id='linkPeople' to='/people'>
    <h2 id='linkPeopleText'>People</h2>
</Link>

    <div id="profileToggle">
        <h2 id='profileText'>Profile</h2>
        <Link id='linkProfile' to='/profile'>
        <h2 id='profileLink'>Profile</h2>
        </Link>
    </div>
    
</section>
    </header>
  )
}
}

export default Header
