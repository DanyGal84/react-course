import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    };

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBETCWQDGzy6WWGPTC3Wr3wBkF43vc6J4';

    if (!isSignup) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBETCWQDGzy6WWGPTC3Wr3wBkF43vc6J4';
    }

    axios.post(url, authData).then(response => {
      dispatch(authSuccess(response.data.idToken, response.data.localId));
    }).catch(err => {
      dispatch(authFailed(err.response.data.error));
    });
  };
};