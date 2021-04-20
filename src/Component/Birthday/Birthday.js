import React, {Component} from 'react';
import {connect} from 'react-redux'
import {requestUser} from '../../ducks/userReducer'
import {getBirthday} from '../../ducks/personReducer'
import BirthdayView from './BirthdayView'
import './Birthday.css'


class Birthday extends Component {
componentDidMount(){
    this.props.getBirthday()
    console.log()
}


render(){   
    console.log(this.props)
const {birthdays}= this.props.personReducer
let mappedBirthday = birthdays.map((birthday, i) => {
    return(
    <BirthdayView id='birthdayViewComponent'key={i} birthday={birthday} render={()=> <BirthdayView/>}/>
  )
});
    return(
        <div id='birthday'>
           <h1>Happy Birhday Crazy!</h1>
                {mappedBirthday}

        </div>
    )
}
}
const mapStateToProps = reduxState => {
    return reduxState
}
export default connect(mapStateToProps,{requestUser,getBirthday})(Birthday)