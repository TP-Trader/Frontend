import {
  //register
  REGISTER_SUCCESS,
  REGISTER_FAIL,

  LOGIN_SUCCESS,
  LOGIN_FAIL,
  
  POST_ERROR,
  POST_ADDED,
  POSTS_LOADED,
  GET_POSTS,
  AUTH_ERROR,
  
  LOGOUT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  loading: true,
  user: null,
  posts: null,
  responses: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
    case POST_ADDED:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };

    case GET_POSTS:
      return {
        ...state,
        isAuthenticated: true,
        posts: payload
      };

    case POSTS_LOADED:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case POST_ERROR:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };

    default:
      return state;
  }
}
