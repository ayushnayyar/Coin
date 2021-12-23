import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchPosts = () => {
  return API.get('/posts');
};

export const getUserPosts = (id) => API.post(`/posts/${id}`);

export const createPost = (post) => API.post('/posts', post);

export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);

export const deletePost = (id) => API.delete(`/posts/${id}`);

export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

// export const getUser = (id) => API.get(`/user/${id}`);

export const getFriendRequests = (id) =>
  API.post(`/friendrequest/${id}/getfriendrequests`);

export const sendFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/sendfriendrequest`, friendId);

export const acceptFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/acceptfriendrequest`, friendId);

export const declineFriendRequest = (id, friendId) =>
  API.patch(`/friendrequest/${id}/declinefriendrequest`, friendId);
