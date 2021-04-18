import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import userReducer from './userReducer';
import personReducer from './personReducer';


const rootReducer = combineReducers({
  userReducer,
  personReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));