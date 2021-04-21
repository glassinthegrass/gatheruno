import axios from 'axios';
import React, {useState,useEffect} from 'react'
import PostView from './PostView'
 import './Birthday.css'
 require("dotenv").config();

const BirthdayView =(props)=>{

const [emailMessage,setEmailMessage]= useState('')
const [emailResponse,setEmailResponse]= useState('')
const [posts,setPosts]= useState([])

useEffect(()=>{
    const{person_id} = props.birthday
axios.get(`/api/posts/${person_id}`).then(res =>{
    setPosts(res.data)
}).catch(err=>console.log(err))
console.log(posts)
console.log(person_id)
console.log(props.birthday)
},);

const handleClick=(name,email,emailMessage)=>{
axios.post('/api/email',{name,email,emailMessage}).then(res=>setEmailResponse(res.data)).catch(err =>console.log(err))
}
let mappedPosts = posts.map((post, i) => {
    return(
    <PostView id='PostViewComponent'key={i} post={post} render={()=> <PostView/>}/>
  )
})

return(
    <div id='birthdayview'>
        <img id='birthdayPicture'src={props.birthday.picture} alt={'https://i.pinimg.com/474x/92/31/f1/9231f1dc287954168c7b348697c11f62.jpg'}></img>
   <section id='birthdayInfo'>
    <p className='birthdayinfo'>{`${props.birthday.first_name} ${props.birthday.last_name}`}</p>
    <p className='birthdayinfo'>{props.birthday.email}</p>
    </section>
    <textarea onChange={e=>setEmailMessage(e.target.value)} id='emailInput'></textarea>
<button type='submit' onClick={()=>handleClick(props.birthday.first_name,props.birthday.email,emailMessage)}>Submit</button>
    {mappedPosts}
    {emailMessage}
    {emailResponse}
    </div>
)
}
export default BirthdayView

