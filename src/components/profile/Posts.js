import React from 'react';

import Post from '../../components/home/Post';

const Posts = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(user);

  return (
    <div className="ProfileSection__Posts">
      {user?.result.posts.map((post) => {
        console.log(post);
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
