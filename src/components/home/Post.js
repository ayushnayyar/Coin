import React from 'react';

import Avatar from '../../assets/images/man.png';

import '../../common/home/post.scss';

const Post = () => {
  return (
    <div className="Feed__Post">
      <div className="Feed__Post__Header">
        <div className="Feed__Post__Header-photo">
          <img src={Avatar} />
        </div>
        <div className="Feed__Post__Header-info">
          <div className="FeedPost__Header-info-name">Ayush Nayyar</div>
          <div className="FeedPost__Header-info-time">12 hours ago</div>
        </div>
      </div>
      <div className="Feed__Post__Text">Testing the feed text div here.</div>
      <div className="Feed__Post__Photos"></div>
    </div>
  );
};

export default Post;
