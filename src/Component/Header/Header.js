import React, { useCallback, useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../ducks/userReducer";
import { logout } from "../../ducks/personReducer";
import { Link, useHistory } from "react-router-dom";
import bee from "../Login/BeeLogoFull.png";
import "./header.css";

const Header = (props) => {
  const history = useHistory(),
        { push,goBack,goForward } = history;
  const { userReducer,logoutUser,logout } = props,
        {user} = userReducer;
  
  const handleLogout = useCallback(()=>{
logout()
logoutUser()
  },[logout,logoutUser])


  const handleClick = useCallback(()=>{
    push("/");
  },[push])


useEffect(()=>{
  if(!user){
    push("/")
  }},[user,push])
  return (
    
    <header id="header">

      <div>
        <img onClick={handleClick} src={bee} alt="logo" id="homeIcon" />
        {user?.isLoggedIn ? (
          <h2 id="greeting">{`Hi ${user?.first_name}!`}</h2>
        ) : (
<></>
        )}
      </div>
      <h1 id="appTitle">Gather</h1>

      <section id="routes">
        <Link id="linkPeople" to="/birthdays">
          <h2 id="linkPeopleText">Birthdays</h2>
        </Link>

        <h2 id="linkGroupsText">
          <Link id="linkGroups" to="/groups">
            Groups
          </Link>
        </h2>

        <div id="profileToggle">
          <h2 id="profileText">Profile</h2>
          <h2 id="profileLink">
            <Link id="linkProfile" to="/user">
              Profile
            </Link>
            <Link id="logoutLink" to="/" onClick={() => handleLogout()}>
              Logout
            </Link>
          </h2>
        </div>
        <nav id="backandforth">
          <div onClick={()=>goBack()} className="arrow-left"></div>
          <div onClick={()=>goForward()} className="arrow-right"></div>
        </nav>
      </section>
    </header>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { logoutUser,logout})(Header);
