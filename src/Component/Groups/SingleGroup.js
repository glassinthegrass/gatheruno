import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { connect } from "react-redux";
import { requestUser } from "../../ducks/userReducer";
import { getAllPeople,getSingleGroup } from "../../ducks/personReducer";
import {useHistory} from 'react-router-dom'

const SingleGroup=(props)=>{
const [people,setPeople] = useState([])

const {group_name}=props.group
const history = useHistory()

useEffect(()=>{
axios.get(`/api/groups/${group_name}`).then(res=>{
    setPeople(res.data)
  })
},[group_name])


const handleAdd =(group_name)=>{
props.getSingleGroup(group_name)

history.push('/groups/people')
}

const handleDelete =(group_name)=>{

axios.delete(`/api/groups/${group_name}`).then(res => console.log(res.data)).catch(err =>console.log(err)) 
  history.push('/groups')
}


let mappedpeople= people.map((person, i) => {
  return(
  <img id='personPic'src={person.picture} alt={i} key={i}></img>
)
})

    return (

      <div onClick={() => handleAdd(group_name)} id="group">
        <div onClick={()=>handleDelete(group_name)} id='deleteGroup'>x</div>
        {mappedpeople}
        
      </div>

    );
  }

const mapStateToProps = (reduxState) => {
  return reduxState;
};
export default connect(mapStateToProps, { requestUser,getAllPeople,getSingleGroup })(SingleGroup);







// class SingleGroup extends Component {
//   constructor(){
//     super()
//     this.state={
//       singleGroup:''
//     }
//   }

//   handleClick=()=>{
//  let name = this.props.group.group_name
// axios.get(`/api/group/${name}`).then(res=>{
//   this.setState({singleGroup:res.data})
//   console.log(this.state.singleGroup)
// }).catch(err=>console.log(err))

//   }
//   render() {
//     const { group_name } = this.props.personReducer.people;
//     return (
//       <div onClick={() => this.handleClick()} id="group">
//         {group_name}
//         {this.state.singleGroup}
//         <br/>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (reduxState) => {
//   return reduxState;
// };
// export default connect(mapStateToProps, { requestUser,getAllPeople })(SingleGroup);
