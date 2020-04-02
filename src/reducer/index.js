import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import alertReducer from './alertReducer'

export default combineReducers({
  postsReducer, authReducer, profileReducer, alertReducer
});
