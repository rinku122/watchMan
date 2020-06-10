import React, { useReducer } from "react";
import AuthReducer from "./authReducer";
import AuthContext from "./authContext";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  CLEAR_ERRORS,
  SET_LOADING,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    error: null,
    loading: false,
    isAuthenticated: false,
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //////////SET LOADING
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  //////////Register a user
  const register = async (user) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", user, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data.errors[0].msg,
      });
    }
  };
  /////LOAD USER
  const loadUser = async () => {
    if (localStorage.getItem("token") !== null) {
      setAuthToken(localStorage.getItem("token"));
    }
    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error.response.data.errors[0].msg,
      });
    }
  };
  /////LOGIN USER
  const login = async (user) => {
    setLoading();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/auth", user, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.errors[0].msg,
      });
    }
  };
  ///// CLEAR ERRORS
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
  ///// CLEAR ERRORS
  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        register,
        clearErrors,
        loadUser,
        login,
        logout,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
