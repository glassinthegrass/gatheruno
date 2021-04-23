import React from "react";
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import { getSingleGroup } from "../../ducks/personReducer";

 const GroupPeople =(props)=>{
    return (
      <div id="GroupPeople">

      </div>
    );
  }

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser,getSingleGroup })(GroupPeople);
