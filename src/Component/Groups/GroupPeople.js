import React, { Component } from "react";
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import axios from "axios";

class GroupPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group_name: "",
      people: [],
    };
  }
  componentDidMount() {
    this.setState({ group_name: this.props.group.group_name });

    axios.get("/api/group", this.state.group_name).then((res) => {
      this.setState({ people: res.data });
      console.log(this.state.group_name);
    });
  }
handleClick =()=>{
   
}
  render() {
    const { group_name } = this.props.group;
    const { people } = this.state;

    return (
      <div id="group">
        {group_name}
        {people}
        {this.state.group_name}
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser })(GroupPeople);
