import React from 'react'
import './PostView.css'
import BeeLine from '/Users/j-mac/devMountain/gather/src/Gather_Dotted_Line.png'
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
        <img id='line' src={BeeLine} alt='a'></img>
        <div id='person'>
        <p id='postUsername'>{`${post.personfirstname} ${post.personlastname}`}</p>
        <img id='postuserPicture' src={post.picture} alt='userPicture'></img>
        </div>
       
    </section>    

    
    <img id='postImg' src={post.post_url} alt='a'></img>
    <p id='postMessage'>{post.post_content}</p>
        </article>


    )
}
export default PostView