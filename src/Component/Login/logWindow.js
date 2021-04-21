import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../ducks/userReducer";
import Bee from '../Login/BeeLogoFull.png'
import "./Login.css";

class LoginWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: "",
      loginPassword: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      login: true,
    };
  }
  handleLoginToggle = () => {
    if (!this.state.login) {
      this.setState({ login: true });
    }
  };

  handleRegisterToggle = () => {
    if (this.state.login) {
      this.setState({ login: false });
    }
  };

  handleRegister = (first_name, last_name, email, password) => {
    axios
      .post("/api/register", { first_name, last_name, email, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    this.setState({ login: true });
  };
  render() {
    const {
      loginEmail,
      loginPassword,
      first_name,
      last_name,
      email,
      password,
    } = this.state;
    return (
      <div id='all'>
        <div>
          {this.state.login ? (
            <section id="loginWindowComponent">
              <h2><img id='gatherIconLogin' src={Bee} alt='gather Logo'></img>See What's the Buzz</h2>
              <input
                id="logemailInput"
                onChange={(e) => this.setState({ loginEmail: e.target.value })}
                type="email"
                placeholder="Enter Email"
              ></input>
              <input
                id="logpasswordInput"
                onChange={(e) =>
                  this.setState({ loginPassword: e.target.value })
                }
                type="password"
                placeholder="Enter Password"
              ></input>

              <button
                id="loginButton"
                onClick={() => this.props.loginUser(loginEmail, loginPassword)}
                type="submit"
              >
        Login
              </button>
            </section>
          ) : (
            <></>
          )}

          {!this.state.login ? (
            <section id="registerWindowComponent">
              <h2>Thanks for Buzzin' by!</h2>
              <input
                id="firstnameInput"
                className="regInput"
                onChange={(e) => this.setState({ first_name: e.target.value })}
                type="text"
                placeholder="First Name"
              ></input>
              <input
                id="lastNameInput"
                className="regInput"
                onChange={(e) => this.setState({ last_name: e.target.value })}
                type="text"
                placeholder="Last Name"
              ></input>
              <input
                id="regemailInput"
                className="regInput"
                onChange={(e) => this.setState({ email: e.target.value })}
                type="email"
                placeholder="Email"
              ></input>
              <input
                id="passwordInput"
                className="regInput"
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
                placeholder="Password"
              ></input>
              <button
                id="registerSubmit"
                className="regInput"
                type="button"
                onClick={() =>
                  this.handleRegister(first_name, last_name, email, password)
                }
              >
                Submit
              </button>
            </section>
          ) : (
            <></>
          )}
        </div>
        <section id="toggles">
          <p
            id="loginToggle"
            className="buttonsBox"
            onClick={() => this.handleLoginToggle()}
            type="submit"
          >
            Login
          </p>
          <p
            id="registerToggle"
            className="buttonsBox"
            onClick={() => this.handleRegisterToggle()}
            type="submit"
          >
            Register
          </p>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { loginUser })(LoginWindow);