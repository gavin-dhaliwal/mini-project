import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutFailure = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

export const loginUser = (email, password) => async dispatch => {
  dispatch(requestLogin());
  try {
    const user = await myFirebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    dispatch(receiveLogin(user));
  } catch (e) {
    dispatch(loginError());
  }
};

export const logoutUser = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await myFirebase.auth().signOut();
    dispatch(logoutSuccess());
  } catch (e) {
    dispatch(logoutFailure());
  }
};

export const verifyAuth = () => dispatch => {
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
  });
};
