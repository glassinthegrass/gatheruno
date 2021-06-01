import React,{useState,useEffect} from 'react'
import './PostView.css'
import BeePiecesWing from '../BeePiecesWing.png'
import BeeLine from '../Gather_Dotted_Line.png'
import axios from 'axios'
const PostView =(props)=> {

const {post} = props

const [ toggle,setToggle]=useState(false)

const handleDelete =(post_id)=>{
    axios.delete(`/api/posts/${post_id}`).then(res=>console.log(res.data)).catch(err=>console.log(err))
setToggle(!toggle)
}
console.log(post.post_id)
    return(
            <article>
                <img id='deleteHex'onClick={()=>handleDelete(post.post_id)} src={BeePiecesWing} alt='delete'></img>
            <article id='post'>
            <section id='postheader'>
            <div id='user'>
        <img id='postuserPicture' src={post.userpicture} alt='userPicture'></img>
        <p id='postUsername'>{`${post.userfirstname} ${post.userlastname}`}</p>
        </div>
        <img id='line' src={BeeLine} alt='a'></img>
        <div id='person'>
        <p id='postUsername'>{`${post.personfirstname} ${post.personlastname}`}</p>
        <img id='postuserPicture' src={post.picture} alt='userPicture'></img>
        </div>
       
    </section>    

    
    <img id='postImg' src={post.post_url} alt='a'></img>
    <p id='postMessage'>{post.post_content}</p>
    </article>
        </article>


    )
}
export default PostView