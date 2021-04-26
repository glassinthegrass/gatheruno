import axios from 'axios';
import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import PostView from './PostView'
 import './Birthday.css'
 require("dotenv").config();

const BirthdayView =(props)=>{

const [postContent,setPostContent]= useState('')
const [postUrl,setPostUrl]= useState('')
const [posts,setPosts]= useState([])
const [toggle,setToggle]=useState(false)

useEffect(()=>{
    const{person_id} = props.birthday
axios.get(`/api/posts/${person_id}`).then(res =>{
    setPosts(res.data)
}).catch(err=>console.log(err))
props.requestUser()

},[toggle]);

const handleClick=(name,email,post_content,post_url,user_id,person_id)=>{
    axios.post('/api/posts',{post_content,post_url,user_id,person_id}).then(res=>console.log(res.data)).catch(err=>console.log(err))
axios.post('/api/email',{name,email,post_content}).then(res=>console.log(res.data)).catch(err =>console.log(err))
setToggle(!toggle)
}
let mappedPosts = posts.map((post, i) => {
    return(
    <PostView id='PostViewComponent'key={i} post={post} render={()=> <PostView/>}/>
  )
})
console.log(props)
return(

        <div id='bday'>
            <section id='birthdayview'>
        <img id='birthdayPicture'src={props.birthday.picture} alt='asdf'></img>
   <section id='birthdayInfo'>
    <p className='birthdayinfo'>{`${props.birthday.first_name} ${props.birthday.last_name}`}</p>
    <p className='birthdayinfo'>{props.birthday.email}</p>
    </section>

   
   <label>Wish Them A Happy Birthday!</label><input type='text' id='messageinput'onChange={e=>setPostContent(e.target.value)}></input>
<label> Include A Picture </label> <input type='url' id='urlinput'onChange={e=>setPostUrl(e.target.value)}></input>


<button type='submit' onClick={()=>handleClick(props.birthday.first_name,props.birthday.email,postContent,postUrl,props.userReducer.user.user_id,props.birthday.person_id)}>Submit</button>
</section>
  <article id='mappedPosts'>{mappedPosts}</article>
    </div>
)
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(BirthdayView)

