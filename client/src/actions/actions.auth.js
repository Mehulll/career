import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILED,
  LOGOUT_USER,
} from "./actions.types";
import axios from "axios";

export const login = (username, email, password) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { username, email, password };

  try {
    const res = await axios.post("api/userModel/login", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log("used logged in");
  } catch (err) {
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

export const signup = (username, email, password) => async (dispatch) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };

  const body = { username, email, password };

  try {
    const res = await axios.post("api/userModel/register", body, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    console.log("user created");
  } catch (err) {
    dispatch({
      type: SIGNUP_FAILED,
    });
  }
};

export const check_authenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const tokenCheck = { token: localStorage.getItem("access") };

    try {
      if (tokenCheck.token != null) {
        dispatch({
          type: AUTHENTICATION_SUCCESS,
          payload: tokenCheck,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATION_FAILED,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATION_FAILED,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
