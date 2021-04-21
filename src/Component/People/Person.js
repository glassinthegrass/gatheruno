import React, { useState } from "react";
import './People.css'


const Person=(props)=>{
const [cardToggle,setCardToggle] =useState(true)

  const handleClick=()=>{
setCardToggle(!cardToggle)
  }

    return (
      <div id='cardAll'>
      <div id="cardHeader"  onClick={handleClick}>
  <img id='person_pic' src={props.person.picture} alt='what'/>
       <p id='cardHeaderName'>{props.person.first_name} {props.person.last_name}</p>
       
       </div>
       {cardToggle ? <></>:<section id='cardExtension' onClick={()=>handleClick()} ><br/><p>{props.person.email}</p>
       <p>{props.person.birthday}</p>
       <p>{props.person.message}</p>
       
       </section>}

      </div>
    );
  }


export default Person