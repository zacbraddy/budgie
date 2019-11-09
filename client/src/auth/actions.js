import axios from 'axios';
import { FETCH_USER, SIGN_OUT } from './action-types';

export const fetchUser = firebase => async dispatch => {
  await firebase.signInWithPopup();

  dispatch({
    type: FETCH_USER,
    payload: firebase.userInfo,
  });
};

export const signOut = firebase => async dispatch => {
  await firebase.doSignout();

  dispatch({
    type: SIGN_OUT,
    payload: firebase.userInfo,
  });
};
