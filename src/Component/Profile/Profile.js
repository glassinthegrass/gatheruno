import React, {useEffect} from 'react';
import './Profile.css'
import {connect} from 'react-redux'
import {requestUser,requestProfile} from '../../ducks/userReducer'
import Post from './Post'
import {useHistory} from 'react-router-dom'

const Profile =(props)=>{
let history = useHistory()

useEffect(()=>{

    const{email}=props.userReducer.user
         props.requestProfile(email)
     if(!props.userReducer.isLoggedIn){
        history.push('/')
        }
     
        console.log(props)
},[])


let mappedPosts = props.userReducer.profile.map((post, i) => {
    return(
    <Post id='postComponent'key={i} post={post} />
  )
})


        return(
<div id='holder'>        
<section id='mainProfile'>
    <div id='picInfo'>

<img id='profilePic' src={props.userReducer.user.profile_picture} alt={'profile'}/>
<ul id='profileInfo'>

    <li><span>First Name: </span>{props.userReducer.user.first_name}</li>
    <li><span>Last Name: </span>{props.userReducer.user.last_name}</li>

    <li id='emailLi'><span>E-Mail: </span>{props.userReducer.email}</li>
<span>Password: <span id='profilePasswordPlaceholder'>**********</span></span>
</ul>
</div>
    <p id='messageParagraph'>{props.userReducer.message}</p>
<div>{mappedPosts}</div>
</section>

</div>        
        )
    
    }


const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,requestProfile})(Profile)

// import React, {Component} from 'react';
// import './Profile.css'
// import {connect} from 'react-redux'
// import {requestUser,requestProfile} from '../../ducks/userReducer'
// import axios from 'axios'
// class Profile extends Component{
//     constructor(props){
//         super(props)
//         this.state ={
//             message:'',
//             posts:[]
//         }
//     }
// componentDidMount(){
//     this.props.requestProfile(this.props.userReducer.user.email)
    
// }
// componentDidUpdate(){
//     const {user_id} = this.props.userReducer.user
//     console.log(user_id)
//     axios.get(`/api/posts/${user_id}`).then(res=>{
//         this.setState({posts:res.data})
//     }).catch(err => console.log(err))
//     console.log(this.state.posts)
// }

//     render(){
// console.log(this.props.userReducer)
// console.log(this.state.posts)
//         return(
// <div id='holder'>        
// <section id='mainProfile'>
//     <div id='picInfo'>

// <img id='profilePic' src={this.props.userReducer.profile.profile_picture} alt={'profile'}/>
// <ul id='profileInfo'>

//     <li><span>First Name: </span>{this.props.userReducer.profile.first_name}</li>
//     <li><span>Last Name: </span>{this.props.userReducer.profile.last_name}</li>

//     <li id='emailLi'><span>E-Mail: </span>{this.props.userReducer.profile.email}</li>
// <span>Password: <span id='profilePasswordPlaceholder'>**********</span></span>
// </ul>
// </div>
//     <p id='messageParagraph'>{this.props.userReducer.profile.message}</p>
// <div>POSTS NEED TO RENDER HERE</div>
// </section>

// </div>        
//         )
    
//     }
// }

// const mapStateToProps = reduxState => {
//     return reduxState
// }
// export default connect(mapStateToProps,{requestUser,requestProfile})(Profile)