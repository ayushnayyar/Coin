import * as api from '../api';
import { GET_USER_POSTS } from '../constants/actionTypes';

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUserPosts(id);
    console.log(data);

    dispatch({ type: GET_USER_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
