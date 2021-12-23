import { GET_USER } from '../constants/actionTypes';
import * as api from '../api';

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserPosts(id);

    dispatch({ type: GET_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
