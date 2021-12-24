import { GET_USER_POSTS } from '../constants/actionTypes';

const INITIAL_DATA = {
  userPosts: [],
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload };

    default:
      return state;
  }
};
