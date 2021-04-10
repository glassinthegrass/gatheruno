import React, { Component } from "react";
import Birthday from "./Component/Birthday";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      candy:''
    }
  }


  render() {
    return (
      <div className="App">
        <Birthday  candy={this.state.candy}/>
      </div>
    );
  }
}

export default App;
