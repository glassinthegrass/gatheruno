// INITIAL STATE
import axios from 'axios'
const initialState = {
    user: [],
    profile:[],
    isLoggedIn:false

}

// ACTION TYPES
const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER';
const REQUEST_USER = 'REQUEST_USER';
const REQUEST_PROFILE = 'REQUEST_PROFILE';
const LOGOUT_USER = 'LOGOUT_USER';


// ACTION CREATORS
export const loginUser=(email,password) => {
    let login = axios.post('/auth/login', {email,password}).then(res => res.data)
    return {
        type: LOGIN_USER,
        payload: login
    }
}
export const registerUser=(first_name,last_name,email,password) => {
let register= axios.post('/auth/register', {first_name,last_name,email,password}).then(res => res.data).catch(err=>console.log(err))
    return {
        type: REGISTER_USER,
        payload: register
    }
}
export const requestUser= () => {
    let request = axios.get('/auth/user').then(res => res.data).catch(err=>console.log(err))
    return {
        type: REQUEST_USER,
        payload: request
    }
}
export const requestProfile = (email) => {
    let profile = axios.get(`/auth/profile/${email}`).then(res => res.data).catch(err=>console.log(err))
    return {
        type: REQUEST_PROFILE,
        payload: profile
    }
}

export const logoutUser=() => {
  let logout = axios.delete('/auth/logout').then(res => res.data).catch(err=>console.log(err))
    return {
        type: LOGOUT_USER,
        payload: logout
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload,
                isLoggedIn:true
            }
        case LOGIN_USER + '_PENDING':
            return {
                ...state
            }
        case REQUEST_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload,
              isLoggedIn:true
            }
        case REQUEST_USER + '_PENDING':
            return {
                ...state
            }
        case REQUEST_PROFILE + '_FULFILLED':
            return {
                ...state,
              profile: action.payload,
            }
        case REQUEST_PROFILE + '_PENDING':
            return {
                ...state
            }
        case REGISTER_USER + '_FULFILLED':
            return {
                ...state,
              user: action.payload,

            }
        case REGISTER_USER + '_PENDING':
            return {
                ...state
            }
        case LOGOUT_USER + '_FULFILLED':
            return {
                ...state,
            user:action.payload,
            isLoggedIn:false
         }
        case LOGOUT_USER + '_PENDING':
            return {
                ...state,
                isLoggedIn:false
         }
        default: return state;
    }
}
