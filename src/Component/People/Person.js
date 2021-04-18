import React, { Component } from "react";
import './People.css'


class Person extends Component {
constructor(props){
  super(props)
  this.state={
    cardToggle: true
  }
}
  handleClick=()=>{
this.setState({cardToggle:!this.state.cardToggle})
  }
  render() {
    const {person}= this.props
    return (
      <div id='cardAll'>
      <div id="cardHeader"  onClick={this.handleClick}>
  <img id='person_pic' src={person.picture} alt='what'/>
       <p id='cardHeaderName'>{person.first_name} {person.last_name}</p>
       </div>
       {this.state.cardToggle ? <></>:<section id='cardExtension' onClick={()=>this.handleClick()} ><p>{person.email}</p>
       <p>{person.birthday}</p>
       <p>{person.message}</p>
       </section>}
      
      </div>
    );
  }
};

export default Person