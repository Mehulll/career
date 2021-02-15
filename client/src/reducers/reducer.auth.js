import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER,
} from "../actions/actions.types";

const initialState = {
  access: localStorage.getItem("access"),
  isAuthenticated: null,
  user: null,
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        access: payload.token,
      };

    case LOGIN_FAILED:
    case LOGOUT_USER:
    case SIGNUP_FAILED:
      localStorage.removeItem("access");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };

    case AUTHENTICATION_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            access: payload.token,
        }

    case AUTHENTICATION_FAILED:
        return {
            ...state,
            isAuthenticated: false,
            access: null,
        }

    default:
      return state;
  }
}