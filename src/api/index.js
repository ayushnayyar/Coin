import axios from 'axios';

export const fetchPosts = () => {
  return axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`);
};

export const createPost = (post) =>
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, post);

export const updatePost = (id, updatedPost) =>
  axios.patch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`, updatedPost);

export const deletePost = (id) =>
  axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}`);

export const likePost = (id) =>
  axios.patch(`${process.env.REACT_APP_BACKEND_URL}/posts/${id}/likePost`);
