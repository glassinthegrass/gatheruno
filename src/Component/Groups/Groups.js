import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestUser } from '../../ducks/userReducer';
import './Groups.css';
import SingleGroup from './SingleGroup';
import BeeWithLine from '/Users/j-mac/devMountain/gather/src/Gather_Line_with_Bee.png';
const Groups =(props) =>{
let history = useHistory()

    const [groups,setGroups] = useState([])
    const [nameInput,setNameInput] = useState([])
    const [toggle,setToggle] =useState(true)

    useEffect(()=>{
axios.get('/api/groupNames').then(res => setGroups(res.data)).catch(err=>console.log(err))
if(!props.userReducer.isLoggedIn){
history.push('/')
}
},[history, props.userReducer.isLoggedIn])

const handleClick =()=>{
    setToggle(!toggle)
}
const handleNewGroup=(group_name)=>{
    console.log(group_name)
    axios.post('/api/groups', {group_name}).then(res =>console.log(res.data)).catch(err=>console.log(err))
  }  

let mappedgroups= groups.map((group, i) => {
        return(
        <SingleGroup id='singleGroup' key={i} group={group} render={()=> <SingleGroup />}/>
      )
    })
    return(
        <div>
{toggle ?   <div id='groups'>
            <div id='addGroup' onClick={()=>handleClick()}>
                <div className='square' id='bottomRight'></div>
                <div className='square' id='bottomLeft'></div>
                <div className='square' id='topRight'></div>
                <div className='square' id='topLeft'></div>
            </div>
            {mappedgroups}
            <img id='beewithlinegroups'src={BeeWithLine} alt='beewithline'></img>
            </div> : <section id='addGroupWindow'> 
            <div  id='optionWindow'>
<h1 onClick={()=>handleClick()}id='exitOption'>x</h1>

<input id='groupNameInput'onChange={(e)=>setNameInput(e.target.value)} type='text'placeholder="Name your Group..."></input>
<div id='createGroupButton' onClick={()=>handleNewGroup(nameInput)}>Create Group</div>


            </div>
            </section>} 

            </div>

    )
}

const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(Groups)