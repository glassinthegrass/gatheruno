import React from "react";
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import { getSingleGroup } from "../../ducks/personReducer";
import BeePiecesWing from '/Users/j-mac/devMountain/gather/src/BeePiecesWing.png'
 const GroupPeople =(props)=>{
   const {singleGroup}=props.personReducer
   console.log(props)
   let mappedpeople= singleGroup.map((person, i) => {

    return(<div id='holder'>
    <img id='groupPicture'src={person.picture} alt={i} key={i}></img>
<img id='hexagon' src={BeePiecesWing} key={i} alt={i}></img>
<h1 id='name'>{person.first_name}</h1>
    </div>
  )
  })
    return (
      <div>
        <div id='groupPeople'>{mappedpeople}</div>

      </div>
    );
  }

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser,getSingleGroup })(GroupPeople);
