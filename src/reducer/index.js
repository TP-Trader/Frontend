import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'

export default combineReducers({
  postsReducer, authReducer, profileReducer
});
