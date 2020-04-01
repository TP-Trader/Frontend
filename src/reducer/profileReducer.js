import { GET_PROFILE, PROFILE_ERROR, LOAD_POSTS, POST_ERROR } from '../actions/types';

const initialState = {
  user: {},
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
 console.log(payload)

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        user: payload,
        loading: false
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };

    case LOAD_POSTS:
      return{
        ...state,
        user:payload,
        loading:false
      }

    case POST_ERROR:
      return {
        ...state,
        error:payload,
        loading:false
      }

    default:
      return state;
  }
}