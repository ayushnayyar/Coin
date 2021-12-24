import { FETCH_FOLLOWERS, FETCH_FOLLOWING } from '../constants/actionTypes';

const INITIAL_DATA = {
  following: [],
  followers: [],
};

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case FETCH_FOLLOWING:
      return { ...state, following: action.payload };

    case FETCH_FOLLOWERS:
      return { ...state, followers: action.payload };

    default:
      return state;
  }
};
