// INITIAL STATE
import axios from 'axios'
const initialState = {
    user: ''

}

// ACTION TYPES
const LOGIN_USER = 'LOGIN_USER';
const REQUEST_USER = 'REQUEST_USER';
const LOGOUT_USER = 'LOGOUT_USER';


// ACTION CREATORS
export const loginUser=(email,password) => {
    let data = axios.post('/auth/login',{email,password}).then(res => res.data)
    console.log(data)
    return {
        type: LOGIN_USER,
        payload: data
    }
}
export const requestUser= () => {
    let data = axios.get('/auth/user').then(res => res.data)
    return {
        type: REQUEST_USER,
        payload: data
    }
}

export const logoutUser=() => {
 axios.delete('/auth/logout').then(res => res.data)
  let data =axios.get('/auth/user').then(res=> res.data) 
    return {
        type: LOGOUT_USER,
        payload: data
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload

            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state
            }
        case REQUEST_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload,

            }
        case REQUEST_USER + '_PENDING':
            return {
                ...state
            }
        case LOGOUT_USER + '_FULFILLED':
            return {
                ...state,
                user:''
            
         }
        default: return state;
    }
}
