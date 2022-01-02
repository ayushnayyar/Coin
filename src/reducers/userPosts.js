import { GET_USER_POSTS } from '../constants/actionTypes';

const INITIAL_DATA = [];

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return action.payload;

    default:
      return state;
  }
};
