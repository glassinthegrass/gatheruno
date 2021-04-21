import React from 'react'
import './PostView.css'

const PostView =(props)=> {
const {post} = props

console.log(post)
    return(
            <article id='post'>
            <section id='postheader'>
            <div id='user'>
        <img id='postuserPicture' src={post.userpicture} alt='userPicture'></img>
        <p id='postUsername'>{`${post.userfirstname} ${post.userlastname}`}</p>
        </div>
        <div id='person'>
        <p id='postUsername'>{`${post.personfirstname} ${post.userlastname}`}</p>
        <img id='postuserPicture' src={post.userpicture} alt='userPicture'></img>
        </div>
    </section>    
    {/* <img src={post.post_url} alt='help'></img> */}
    <p id='postMessage'>{post.post_content}</p>
        </article>


    )
}
export default PostView