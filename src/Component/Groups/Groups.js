import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import SingleGroup from './SingleGroup';
import './Groups.css'


class Birthday extends Component {
    constructor(props){
        super(props)
        this.state={
            groups:[],
            groupId:0,
            group:[]
        }
    }    
    componentDidMount(){
    axios.get('/api/groups').then(res =>{
        this.setState({groups:res.data})
    })
}
handleClick=(group_name)=> {
        axios.get(`/api/group`, group_name)
        .then(res=> {
            this.setState({group:res.data})
        })
        console.log(group_name)
    }
    
render(){   
    console.log(this.state.group)
    const {groups,group}= this.state
    let mappedgroups= groups.map((groups, i) => {
        return(
        <SingleGroup id='singleGroup' key={i} handleClick={this.handleClick} groups={groups} group={group} render={()=> <SingleGroup/>}/>
      )
    });
    return(
        <div id='groups'>
        {mappedgroups}
        </div>
    )
}
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(Birthday)