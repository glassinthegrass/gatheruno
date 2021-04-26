import {useHistory} from 'react-router-dom'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import {getBirthday} from '../../ducks/personReducer'
import BirthdayView from './BirthdayView'
import './Birthday.css'
import beewithline from '/Users/j-mac/devMountain/gather/src/Gather_Line_with_Bee.png'


const Birthday=(props)=>{
let history = useHistory()

useEffect(()=>{
    props.getBirthday()

    if(!props.userReducer.isLoggedIn){
        history.push('/')
        }
},[])

const {birthdays}= props.personReducer

let mappedBirthday = birthdays.map((birthday, i) => {
    return(
    <BirthdayView id='birthdayViewComponent'key={i} birthday={birthday} render={()=> <BirthdayView/>}/>
  )
});
    return(
        <div id='birthday'>
<img id='bee' src={beewithline} alt='A'></img>
                {mappedBirthday}
        </div>
    )
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,getBirthday})(Birthday)