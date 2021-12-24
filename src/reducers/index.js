import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import requests from './requests';
import people from './people';
import userPosts from './userPosts';

export default combineReducers({
  posts,
  auth,
  requests,
  people,
  userPosts,
});
