import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import SingleGroup from './SingleGroup';
import './Groups.css'
import BeeWithLine from '/Users/j-mac/devMountain/gather/src/Gather_Line_with_Bee.png'
import {useHistory} from 'react-router-dom'
const Groups =(props) =>{
let history = useHistory()
    const [groups,setGroups] =useState([])
   useEffect(()=>{
axios.get('/api/groupNames').then(res => setGroups(res.data)).catch(err=>console.log(err))
if(!props.userReducer.isLoggedIn){
history.push('/')
}
},[])

    let mappedgroups= groups.map((group, i) => {

        return(
        <SingleGroup id='singleGroup' key={i} group={group} render={()=> <SingleGroup />}/>
      )
    })
    return(

        <div id='groups'>
            <div id='addGroup'>
                <div className='square' id='bottomRight'></div>
                <div className='square' id='bottomLeft'></div>
                <div className='square' id='topRight'></div>
                <div className='square' id='topLeft'></div>
            </div>
            {mappedgroups}
            <img id='beewithlinegroups'src={BeeWithLine} alt='beewithline'></img>
            </div>
            


    )
}


const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser})(Groups)
// class Groups extends Component {
//     constructor(props){
//         super(props)
//         this.state={
//             groups:[],
//             groupName:''

//         }
//     }    
//     componentDidMount(){
//     axios.get('/api/groupNames').then(res =>{
//         this.setState({groups:res.data})
//         console.log(res.data)

//     })

// }
// render(){   
// console.log(this.props)
//     const {groups}= this.state
//     let mappedgroups= groups.map((group, i) => {
//         return(
//         <SingleGroup id='singleGroup' key={i} group={group}  render={()=> <SingleGroup/>}/>
//       )
//     });
//     return(
//         <div id='groups'>
//         {mappedgroups}
//         </div>
//     )
// }
// }
// const mapStateToProps = reduxState => {
//     return reduxState
// }
// export default connect(mapStateToProps,{requestUser})(Groups)