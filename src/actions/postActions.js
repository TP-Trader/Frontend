import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, POST_ADDED, POSTS_ERROR } from './types';
// import setAuthToken from '../utils/setAuthToken';

//LOAD POSTS
export const loadPosts = () => async dispatch => {

  try {
    const res = await axios.get('/api/posts')

    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POSTS_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status}
    });
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
      'Content-Type': 'application/json'
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
    const res = await axios.post(
      '/api/posts',
      body,
      config
    );

    dispatch({
      type: POST_ADDED,
      payload: res.data //token is in here
    });
    dispatch(loadPosts());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: POSTS_ERROR
    });
  }
};