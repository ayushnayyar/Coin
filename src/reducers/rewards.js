import { GET_REWARDS } from '../constants/actionTypes';

const INITIAL_DATA = 0;

export default (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case GET_REWARDS:
      return action.payload;

    default:
      return state;
  }
};
