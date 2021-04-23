import {useHistory} from 'react-router-dom'
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import {getBirthday} from '../../ducks/personReducer'
import BirthdayView from './BirthdayView'
import './Birthday.css'



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

                {mappedBirthday}
        </div>
    )
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,getBirthday})(Birthday)