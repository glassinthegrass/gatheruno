import React from "react";
import {Link} from "react-router-dom"
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import { getSingleGroup } from "../../ducks/personReducer";
import BeePiecesWing from '/Users/j-mac/devMountain/gather/src/BeePiecesWing.png'


const GroupPeople =(props)=>{
   const {singleGroup}=props.personReducer 
   let mappedpeople= singleGroup.map((person, i) => {
     const {person_id}=person
    return(
    
    <div key={i} id='holder'>
      <Link to={`/personprofile/${person_id}`}>
    <img id='groupPicture'src={person.picture} alt={i} ></img>
    </Link>
<img id='hexagon' src={BeePiecesWing} alt={i}></img>
<h1 id='name'>{person.first_name}</h1>
    </div>
  )
  })
    return (
      <div id='justify'>
        <div id='groupPeople'>
          <div id='addPerson'></div>
          <div id='deleteGroup'></div>
          {mappedpeople}
          </div>
      </div>
    );
  }

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser,getSingleGroup })(GroupPeople);
