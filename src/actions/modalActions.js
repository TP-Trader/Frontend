import {LOGIN_OPEN, LOGIN_CLOSE, REGISTER_OPEN, REGISTER_CLOSE} from './types' ;

export const hideLogin = () => dispatch =>{
dispatch({
  type: LOGIN_CLOSE,
  payload: false
})

}

export const reveilLogin = () => dispatch =>{
dispatch({
  type: LOGIN_OPEN,
  payload: true
})

}