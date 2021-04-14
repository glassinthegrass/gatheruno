import React, { Component } from "react";



class Person extends Component {
 
  render() {
    const {person}= this.props
    return (
      <div id="cardHeader" onClick={this.handleClick}>
        <div id='cardContent'>
          {`#${person.person_id}${person.first_name} || ${person.last_name}`}
        </div>
      </div>
    );
  }
};

export default Person