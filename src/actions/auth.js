import { AUTH, FRIEND_REQUEST } from '../constants/actionTypes';
import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
  try {
    // Log in
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    // Sign Up
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history.push('/');
  } catch (error) {
    console.log(error.message);
  }
};

export const addFriend = (id, friendId) => async (dispatch) => {
  try {
    const { data } = await api.addFriend(id, friendId);

    dispatch({ type: FRIEND_REQUEST, data });
  } catch (error) {
    console.log(error.message);
  }
};

// export const signIn = () => {
//   return {
//     type: 'SIGN_IN',
//   };
// };

// export const signOut = () => {
//   return {
//     type: 'SIGN_OUT',
//   };
// };
