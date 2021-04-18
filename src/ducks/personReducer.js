import axios from 'axios';

const initialState = {
    people:[],
    birthdays:[]
}

const GET_ALL_PEOPLE = 'GET_ALL_People';
const GET_BIRTHDAYS ='GET_BIRTHDAYS'

export const getAllPeople=() =>{
    let data = axios.get('/api/people').then(res =>res.data)
    return {
        type: GET_ALL_PEOPLE,
        payload: data
    }
}
export const getBirthday=() =>{
    let bday = axios.get('/api/birthday').then(res =>res.data)
    return {
        type: GET_BIRTHDAYS,
        payload: bday
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        
        case GET_ALL_PEOPLE + "_FULFILLED":
            return {
                ...state,
                people: action.payload,
                isLoading:false
            };

        case GET_ALL_PEOPLE + "_PENDING":
            return {
                ...state,
                isLoading:true
            }
        case GET_BIRTHDAYS + "_FULFILLED":
            return {
                ...state,
                birthdays: action.payload,
                isLoading:false
            };

        case GET_BIRTHDAYS + "_PENDING":
            return {
                ...state,
                isLoading:true
            }
        default: return state;
    }
}