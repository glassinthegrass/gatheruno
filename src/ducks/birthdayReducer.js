import axios from 'axios';

const initialState = {
    people: [],
}

const GET_ALL_PEOPLE = 'GET_ALL_People';

export const getAllPeople=() =>{
    let data = axios.get('http://localhost:3111/api/people').then(res => res.data)
    return {
        type: GET_ALL_PEOPLE,
        payload: data
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        
        case GET_ALL_PEOPLE + "_FULFILLED":
            return {
                ...state,
                people: action.payload.data,
            };

        case GET_ALL_PEOPLE + "_PENDING":
            return {
                ...state
            }
        default: return state;
    }
}