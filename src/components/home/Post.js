import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../assets/images/man.png';
import Laptop from '../../assets/images/laptop.jpg';

import '../../common/home/post.scss';

const Post = ({ postText, author, time }) => {
  return (
    <div className="Feed__Post">
      <div className="Feed__Post__Header">
        <div className="Feed__Post__Header-photo">
          <img src={Avatar} />
        </div>
        <div className="Feed__Post__Header-info">
          <div className="FeedPost__Header-info-name">{author}</div>
          <div className="FeedPost__Header-info-time">{time}</div>
        </div>
      </div>
      <div className="Feed__Post__Text">{postText}</div>
      <div className="Feed__Post__Photos">
        <div className="Feed__Post__Photo">
          <img src={Laptop} />
        </div>
      </div>
      <div className="Feed__Post__Reactions"></div>
    </div>
  );
};

Post.propTypes = {
  postText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Post;
