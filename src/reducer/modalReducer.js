import {
  LOGIN_OPEN, LOGIN_CLOSE, REGISTER_OPEN, REGISTER_CLOSE
} from "../actions/types";

const initialState = {
  modalShow: false,
  testing:true
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(state.modalShow);

  switch (type) {
    case LOGIN_OPEN:
      console.log(payload);
      return {
        ...state,
        modalShow: true,
      };

    case LOGIN_CLOSE:
      console.log(payload);
      return {
        ...state,
        modalShow: false,
      };

    case REGISTER_OPEN:
      console.log(payload);
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case REGISTER_CLOSE:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

