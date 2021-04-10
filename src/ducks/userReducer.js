import axios from 'axios';

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export const requestUserData = () => {
    let data = axios.get('/auth/user-data').then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

const initialState ={
    email: null
}

export default function reducer(state = initialState,action){
    switch(action.type){
        case REQUEST_USER_DATA + '_FULFILLED':
            const {email} = action.payload.user
                return{email}
        default: 
    return state
    }
}