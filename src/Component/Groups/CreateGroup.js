import React, {useCallback, useState} from 'react';
import axios from 'axios';

const CreateGroup =(props)=>{
const [groupNameInput,setGroupNameInput]=useState('');
const [person,setPerson]=useState('');
const {toggle,settoggle}=props;
const [newGroup,setNewGroup]=useState('')
const handleClick=()=>{
    settoggle(!toggle)
}

const handleNewGroup=(group_name)=>{
    axios.post('/api/groups', {group_name}).then(res =>setNewGroup(res.data)).catch(err=>console.log(err))
} 



    return(
    
        <section id='addGroupWindow'>
    {!newGroup ? ( 
        <div  id='optionWindow'>
<h1 onClick={()=>handleClick()}id='exitOption'>x</h1>
<p>group name</p>
<input id='groupNameInput'onChange={(e)=>setGroupNameInput(e.target.value)} type='text'placeholder="Name your Group..."></input>
<div id='createGroupButton' onClick={()=>handleNewGroup(groupNameInput)}>Create Group</div>
</div>
):(
    <div>
<p>first_name</p>
<input onChange={e=>setPerson({...person,first_name:e.target.value})} type='text'></input>
<p>last_name</p>
<input onChange={e=>setPerson({...person,last_name:e.target.value})} type='text'></input>
<p>email</p>
<input  onChange={e=>setPerson({...person,email:e.target.value})} type='text'></input>
<p>birthday</p>
<input onChange={e=>setPerson({...person,birthday:e.target.value})} type='text'></input>
<p>picture</p>
<input onChange={e=>setPerson({...person,picture:e.target.value})} type='text'></input>
<p>zipcode</p>
<input onChange={e=>setPerson({...person,zipcode:e.target.value})} type='text'></input>
<p>message</p>
<input onChange={e=>setPerson({...person,message:e.target.value})} type='text'></input>
</div>
    )
}
        </section>
    )
}
export default CreateGroup