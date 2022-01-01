import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import requests from './requests';
import people from './people';
import userPosts from './userPosts';
import rewards from './rewards';

export default combineReducers({
  posts,
  auth,
  requests,
  people,
  userPosts,
  rewards,
});
