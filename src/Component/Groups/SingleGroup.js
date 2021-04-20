import React, { Component } from "react";
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import { getAllPeople } from "../../ducks/personReducer";
import axios from "axios";


class SingleGroup extends Component {
  constructor(){
    super()
    this.state={
      singleGroup:''
    }
  }

  handleClick=()=>{
 let name = this.props.group.group_name
axios.get(`/api/group/${name}`).then(res=>{
  this.setState({singleGroup:res.data})
  console.log(this.state.singleGroup)
}).catch(err=>console.log(err))

  }
  render() {
    const { group_name } = this.props.personReducer.people;
    return (
      <div onClick={() => this.handleClick()} id="group">
        {group_name}
        {this.state.singleGroup}
        <br/>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser,getAllPeople })(SingleGroup);
