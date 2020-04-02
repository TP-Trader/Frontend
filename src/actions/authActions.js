import axios from "axios";
import { setAlert } from "./alertActions";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  GET_POSTS,
  POST_ADDED,
  POST_ERROR,
  AUTH_ERROR,
  LOGOUT
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//Register User
export const register = ({ email, password }) => async dispatch => {
  const body = {
    email: email,
    password: password
  };
  console.log(body);

  try {
    const res = await axios.post(
      "http://localhost:4000/api/auth/register",
      body
    );
    console.log(res.data);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(setAlert("Welcome to TP Trader! ", "success"));
  } catch (err) {
    // const errors = err.response.data.errors;
    console.log(err);
    if (err) {
      dispatch(setAlert("Email already exists.", "danger"));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

//Login user
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = { email: email, password: password };

  try {
    const res = await axios.post("http://localhost:4000/api/auth/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data //token is in here
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};




//LOAD POSTS
export const loadPosts = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/posts");

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

// //LOAD USER
// export const loadChef = () => async dispatch => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token);
//   }
//   try {
//     const res = await axios.get(
//       '/api/users'
//     );

//     dispatch({
//       type: USER_LOADED,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: AUTH_ERROR
//     });
//   }
// };

//LOGOUT
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
