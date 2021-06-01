import axios from "axios";

const initialState = {
  people: [],
  birthdays: [],
  singleGroup: []
};

const GET_ALL_PEOPLE = "GET_ALL_People";
const GET_SINGLE_GROUP = "GET_SINGLE_GROUP";
const GET_BIRTHDAYS = "GET_BIRTHDAYS";
const LOGOUT = "LOGOUT";
export const logout =()=>{
  return {
    type:LOGOUT
  }
}
export const getAllPeople = () => {
  let people = axios.get("/api/people").then((res) => res.data);
  return {
    type: GET_ALL_PEOPLE,
    payload: people,
  };
};
export const getBirthday = () => {
  let bday = axios.get("/api/birthday").then((res) => res.data);
  return {
    type: GET_BIRTHDAYS,
    payload: bday,
  };
};
export const getSingleGroup = (group_name) => {
  let group = axios.get(`/api/groups/${group_name}`).then((res=>res.data))
  return {
    type: GET_SINGLE_GROUP,
    payload: group
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return {
...initialState
      };
    case GET_ALL_PEOPLE + "_FULFILLED":
      return {
        ...state,
        people: action.payload,
        isLoading: false,
      };

    case GET_ALL_PEOPLE + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case GET_BIRTHDAYS + "_FULFILLED":
      return {
        ...state,
        birthdays: action.payload,
        isLoading: false,
      };
    case GET_BIRTHDAYS + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case GET_SINGLE_GROUP + "_FULFILLED":
      return {
        ...state,
        singleGroup: action.payload,
        isLoading: false,
      };

    case GET_SINGLE_GROUP + "_PENDING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
