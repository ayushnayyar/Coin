import React from 'react';
import { useSelector } from 'react-redux';

import Post from '../../components/home/Post';

const Posts = () => {
  const posts = useSelector((state) => state.userPosts);
  console.log(posts);

  return (
    <div className="ProfileSection__Posts">
      {posts.userPosts.length > 0 ? (
        posts.userPosts.map((userPost) => {
          return <Post key={userPost._id} post={userPost} />;
        })
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </div>
  );
};

export default Posts;
