import axios from "axios";
import React, { useState, useEffect,useCallback } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/userReducer";
import "./Login.css";

const LoginWindow = (props) => {
  const [toggle, setToggle] = useState(true);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [validation,setValidation] = useState('');
  const [validation2,setValidation2] = useState('');
  const [response, setResponse] = useState('');
  
  const handleToggle = () => {
    toggle ? setToggle(!toggle) : setToggle(!toggle);
  };
const passwordVal =useCallback(()=>{
  password.length > 5 && password !== '' ? setValidation("yellow") : setValidation("red");
  passwordCheck.length > 5 && passwordCheck !== '' ? setValidation2("yellow") : setValidation2("red");
if(password===passwordCheck&&password && passwordCheck !== ''){
  setValidation("green")
  setValidation2("green")
}
},[password,passwordCheck,setValidation,setValidation2]);


useEffect(()=>{
passwordVal()

},[passwordVal])



  const handleRegister = async (first_name, last_name, email, password) => {
    try {
      let user = await axios.post("/auth/register", {
        first_name,
        last_name,
        email,
        password
      });
      setResponse(user.data);
    } catch (err) {
      setResponse('Oops- Something went wrong')
    }
  };

  return (
    <div id="all">

        {toggle ? (
          <section id="loginWindowComponent">
            <section id="loginHeadline">
              <h1 id="headline">
                <strong>GATHER</strong>
              </h1>
              <h3 id="tagline">a place for friends</h3>
            </section>
            <input
              id="logemailInput"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
            ></input>
            <input
              id="logpasswordInput"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
            ></input>

            <button
              id="loginButton"
              onClick={() => props.loginUser(email, password)}
              type="submit"
            >
              Login
            </button>
          </section>
        ) : (
          <></>
        )}

        {!toggle ? (
          <section id="registerWindowComponent">
            <h2>See What's Buzzin'...</h2>
            <input
              id="firstnameInput"
              className="regInput"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
            ></input>
            <input
              id="lastNameInput"
              className="regInput"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
            ></input>
            <input
              id="regemailInput"
              className="regInput"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            ></input>
            <input
              id="passwordInput"
              className="regInput"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            ></input>
            <div style={{ color: `${validation}` }} id="verify">●</div>
            <input
              id="passwordInput2"
              className="regInput"
              onChange={(e) => setPasswordCheck(e.target.value)}
              type="password"
              placeholder="Password"
            ></input>        
            <div style={{ color: `${validation2}` }} id="verify">●</div>
            <button
              id="registerSubmit"
              className="regInput"
              type="button"
              onClick={() =>
                handleRegister(first_name, last_name, email, password)
              }
            >
              Submit
            </button>
          </section>
        ) : (
          <></>
        )}
      
{toggle ? (
      <section id="toggles">
        <p
          id="loginToggle"
          className="buttonsBox"
          onClick={() => handleToggle()}
          type="submit"
        >
          Login
        </p>
        <p
          id="registerToggle"
          className="buttonsBox"
          onClick={() => handleToggle()}
          type="submit"
        >
          Register
        </p>
      </section>
):(<></>)}

    </div>
  );
};

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { loginUser })(LoginWindow);
