import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import SingleGroup from './SingleGroup';
import './Groups.css'


class Groups extends Component {
    constructor(props){
        super(props)
        this.state={
            groups:[],
            groupName:''

        }
    }    
    componentDidMount(){
    axios.get('/api/groupNames').then(res =>{
        this.setState({groups:res.data})
        console.log(res.data)

    })

}
render(){   
console.log(this.props)
    const {groups}= this.state
    let mappedgroups= groups.map((group, i) => {
        return(
        <SingleGroup id='singleGroup' key={i} group={group}  render={()=> <SingleGroup/>}/>
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
export default connect(mapStateToProps,{requestUser})(Groups)