import { GET_POSTS, POST_ERROR, GET_FILTERED_POSTS, GET_USER_POSTS } from "../actions/types";

const initialState = {
  user: null,
  loading: true,
  error: {},
  posts: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(state.posts, state.loading);

  switch (type) {
    case GET_POSTS:
      console.log(payload);
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case GET_FILTERED_POSTS:
      console.log(payload);
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case GET_USER_POSTS:
      console.log(payload);
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
