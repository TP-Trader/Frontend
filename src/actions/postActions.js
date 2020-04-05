import axios from "axios";
import { setAlert } from "./alertActions";
import { GET_POSTS, POST_ADDED, POST_ERROR , GET_FILTERED_POSTS, GET_USER_POSTS} from "./types";
// import setAuthToken from '../utils/setAuthToken';

//LOAD POSTS
export const loadPosts = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:4000/api/landing/");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
  }
};

//LOAD FILTERED POSTS
export const filteredPosts = (state) => async dispatch => {
  try {
    const res = await axios.get("http://localhost:4000/api/landing/");
    dispatch({
      type: GET_FILTERED_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
  }
};

//LOAD USER POSTS
export const userPosts = (id) => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/posts/${id}`);
    dispatch({
      type: GET_USER_POSTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err)
  }
};

//add post
export const postAdded = ({
  picture,
  name,
  ingredients,
  description,
  mealtype,
  breakfast,
  lunch,
  dinner,
  dessert,
  snack
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({
    picture,
    name,
    ingredients,
    description,
    mealtype,
    breakfast,
    lunch,
    dinner,
    dessert,
    snack
  });

  try {
    const res = await axios.post("/api/posts", body, config);

    dispatch({
      type: POST_ADDED,
      payload: res.data //token is in here
    });
    dispatch(loadPosts());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: POST_ERROR
    });
  }
};
