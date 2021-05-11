import React, {useState,useEffect} from 'react';

import '../Profile/Profile.css'
import {connect} from 'react-redux'
import {requestUser,requestProfile} from '../../ducks/userReducer'
import axios from 'axios';

const PeopleProfile =(props)=>{
    const [person,setPerson]=useState({})
    const {person_id}=props.match.params

    useEffect(()=>{
        axios.get(`/api/people/${person_id}`).then(res =>{
            setPerson(res.data)
        }).catch(err=>console.log(err))
    },[])

console.log(props)
console.log(person)

// let mappedPosts = person.map((post, i) => {
//     return(
//     <Post id='postComponent'key={i} post={post} />
//   )
// })


        return(
<div id='holder'>        
<section id='mainProfile'>
    <div id='picInfo'>

<img id='profilePic' src={person[0].picture} alt={'profile'}/>
<ul id='profileInfo'>

    <li><span>First Name: </span>{person[0].first_name}</li>
    <li><span>Last Name: </span>{person[0].last_name}</li>

    <li id='emailLi'><span>E-Mail: </span>{person[0].email}</li>
</ul>
</div>
    <p id='messageParagraph'>{person[0].message}</p>
</section>

</div>        
        )
    
    }


const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,requestProfile})(PeopleProfile)