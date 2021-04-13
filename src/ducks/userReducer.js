// INITIAL STATE
import axios from 'axios'
const initialState = {
    user: '',
    isLoggedIn: false
}

// ACTION TYPES
const LOGIN_USER = 'LOGIN_USER';
const REQUEST_USER = 'REQUEST_USER';
const LOGOUT_USER = 'LOGOUT_USER';


// ACTION CREATORS
export const loginUser=(email,password) => {
    let data = axios.post('/auth/login',{email,password}).then(res => res.data)
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
    return {
        type: LOGOUT_USER,
        payload: axios.delete('/auth/logout')
    }
}

// REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER + "_FULFILLED":
            return {
                ...state,
              user: action.payload,
                isLoggedIn: true
            }
        case REQUEST_USER + "_FULFILLED":
            return {
                ...state,
              user: action.payload
            }
        case LOGOUT_USER + "_FULLFILLED":
            return initialState;
        default: return state;
    }
}
