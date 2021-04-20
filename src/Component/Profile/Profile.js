import React, {Component} from 'react';
import './Profile.css'
import {connect} from 'react-redux'
import {requestUser,requestProfile} from '../../ducks/userReducer'

class Profile extends Component{
    constructor(){
        super()
        this.state ={
            message:''
        }
    }
componentDidMount(){
    this.props.requestProfile(this.props.userReducer.user.email)
}


    render(){
console.log(this.props.userReducer.profile)
const {profile} = this.props.userReducer
        return(
<div id='holder'>        

<section id='mainProfile'>
    <div id='picInfo'>

<img id='profilePic' src={profile.profile_picture} alt={'profile'}/>
<ul id='profileInfo'>

    <li><span>First Name: </span>{profile.first_name}</li>
    <li><span>Last Name: </span>{profile.last_name}</li>

    <li id='emailLi'><span>E-Mail: </span>{profile.email}</li>
<span>Password: <span id='profilePasswordPlaceholder'>**********</span></span>
</ul>
</div>
    <p id='messageParagraph'>{profile.message}</p>
<div>POSTS NEED TO RENDER HERE</div>
</section>

</div>        
        )
    
    }
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,requestProfile})(Profile)