import axios from 'axios';

export const fetchPosts = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`);
};
