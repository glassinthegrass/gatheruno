import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestUser, logoutUser } from "../../ducks/userReducer";
import { Link, useHistory } from "react-router-dom";
import bee from "../Login/BeeLogoFull.png";
import "./header.css";

const Header = (props) => {
  const handleLogout = () => {
    props.logoutUser();
  };

  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
useEffect(()=>{
  if(!props.userReducer.user){
    history.push("/")
  }},)
  const { userReducer } = props;
  return (
    
    <header id="header">
      <div>
        <img onClick={handleClick} src={bee} alt="logo" id="homeIcon" />
        {userReducer.user ? (
          <h2 id="greeting">{`Hi ${userReducer.user.first_name}!`}</h2>
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
          <div onClick={()=>history.goBack()} className="arrow-left"></div>
          <div onClick={()=>history.goForward()} className="arrow-right"></div>
        </nav>
      </section>
    </header>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { logoutUser, requestUser })(Header);
