import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../../components/home/Post';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="ProfileSection__Posts">
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
