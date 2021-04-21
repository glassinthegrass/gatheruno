import React, {useState,useEffect} from 'react'


const PostView =(props)=> {

const {post} = props
    return(<article>
        <img src={post.userPicture} alt='userPicture'></img>
    
    </article>)
}
export default PostView