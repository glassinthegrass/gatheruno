import React from 'react'
import './PostView.css'

const Post =(props)=> {
const {post} = props


    return(
            <article id='post'>
            <section id='postheader'>
            <div id='user'>
        <img id='postuserPicture' src={post.picture} alt='userPicture'></img>
        <p id='postUsername'>{`${post.first_name} ${post.last_name}`}</p>
        </div>
        <div id='person'>
        <p id='postUsername'>{`${post.first_name} ${post.last_name}`}</p>
        <img id='postuserPicture' src={post.profile_picture} alt='userPicture'></img>
        </div>
    </section>    
    {/* <img src={post.post_url} alt='help'></img> */}
    <p id='postMessage'>{post.post_content}</p>
        </article>


    )
}
export default Post