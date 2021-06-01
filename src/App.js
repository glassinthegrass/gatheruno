import React from "react";
import Header from './Component/Header/Header'
import routes from './routes'
import {connect}from 'react-redux';
import './reset.css'
import './Component/Header/header.css'
import "./App.css";


const App =(props) =>{
const {isLoggedIn}= props

  const logCheck = isLoggedIn ?  <><Header />{routes}</>:<>{routes}</>

  return (
    <div className='App'>
      {logCheck}
    </div>
    );
};

const mapStateToProps =reduxState =>{
  return reduxState.userReducer
}

export default connect(mapStateToProps)(App);
