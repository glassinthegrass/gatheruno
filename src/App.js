import React, { Component } from "react";
import Header from './Component/Header/Header'
import routes from './routes'
import './reset.css'
import './Component/Header/header.css'
import "./App.css";

class App extends Component {
  render() {

    return (
      <div className="App">
      <Header />
      {routes}

      </div>
    );
  }
}

export default App;
