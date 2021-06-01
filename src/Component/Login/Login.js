import People from "../People/People";
import LogWindow from "./logWindow";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestUser, loginUser } from "../../ducks/userReducer";
import { getAllPeople, getBirthday } from "../../ducks/personReducer";
import BeeWithLine from "../Gather_Line_with_Bee.png";
import "./Login.css";

const Login=(props)=> {
const {getAllPeople,getBirthday,personReducer}=props
const{isLoggedIn}=props.userReducer.user

    useEffect(()=>{
     getAllPeople();
 },[getAllPeople]) 

    useEffect(()=>{
        getBirthday();
 },[getBirthday]) 



    return (
      <div id="loginComponent">

        {isLoggedIn ? (
          <div id="ppl">
            <People
        
              onClick={() => this.handleClick()}
              people={personReducer.people}
            />
          </div>
        ) : (
            <>
          <div id="logwindow">
            <LogWindow />
          </div></>
            )}
        <img id="beewithline" src={BeeWithLine} alt="BeeWithLine"></img>
      </div>
    );
}

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, {
  loginUser,
  getBirthday,
  requestUser,
  getAllPeople,
})(Login);
