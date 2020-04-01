import axios from 'axios';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ADDED,
  POST_ERROR,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';
import setAuthToken from '../utils/setAuthToken';



//LOAD POSTS
export const loadPosts = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      '/api/posts'
    );

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR
    });
  }
};

// //Post Recipe
// export const postRecipe = ({
//   picture,
//   name,
//   ingredients,
//   description,
//   mealtype,
//   breakfast,
//   lunch,
//   dinner,
//   dessert,
//   snack
// }) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };
//   const body = JSON.stringify({
//     picture,
//   name,
//   ingredients,
//   description,
//   mealtype,
//   breakfast,
//   lunch,
//   dinner,
//   dessert,
//   snack
//   });

//   try {
//     const res = await axios.post(
//       'https://chefportfoliofinal.herokuapp.com/recipes',
//       body,
//       config
//     );

//     dispatch({
//       type: POST_ADDED,
//       payload: res.data //token is in here
//     });
//     dispatch(loadRecipes());
//   } catch (err) {
//     const errors = err.response.data.errors;

//     if (errors) {
//       errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//     }

//     dispatch({
//       type: POST_ERROR
//     });
//   }
// };


//LOAD USER
export const loadChef = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get(
      '/api/users'
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Register User
export const register = ({
  email,
  password,
  city
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    email,
    password,
    city
  });

  try {
    const res = await axios.post(
      '/api/register',
      body,
      config
    );

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data //token is in here
    });
    dispatch(loadChef());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login Chef
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      '/api/login',
      body,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data //token is in here
    });

    dispatch(loadChef());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//LOGOUT
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};