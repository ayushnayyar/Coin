import { SEND_FRIEND_REQUEST, AUTH, LOGOUT } from '../constants/actionTypes';

const INITIAL_STATE = {
  authData: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH:
    case SEND_FRIEND_REQUEST:
      localStorage.setItem(
        'profile',
        JSON.stringify({ ...action?.payload.data })
      );
      return { ...state, authData: action?.payload.data };

    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};

// export default (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case 'SIGN_IN':
//       return { ...state, isSignedIn: true };
//     case 'SIGN_OUT':
//       return { ...state, isSignedIn: false };
//     default:
//       return state;
//   }
// };

export default authReducer;
