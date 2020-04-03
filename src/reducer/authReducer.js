import {
  //register
  REGISTER_SUCCESS,
  REGISTER_FAIL,

  LOGIN_SUCCESS,
  LOGIN_FAIL,

  LOGOUT,

  GET_PROFILE,
  PROFILE_ERROR,

  POST_ERROR,
  POST_ADDED,
  POSTS_LOADED,
  GET_POSTS,
  AUTH_ERROR
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  redir: false,
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
      console.log(payload)
      return {
        ...state,
        isAuthenticated: true,
        posts: payload
      };

    case GET_PROFILE:
      console.log(state.user)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
        user: payload
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
      return {
        ...state,
        ...payload,
        isAuthenticated: false,
        redir: true,
        loading: false
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      localStorage.setItem("email", payload.email);
      localStorage.setItem("id", payload.id)
      console.log(payload);
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
      localStorage.removeItem("email");
      localStorage.removeItem("id");
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
