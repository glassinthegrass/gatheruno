import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import birthdayReducer from './birthdayReducer';


const rootReducer = combineReducers({
  userReducer,
  birthdayReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));