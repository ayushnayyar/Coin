import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { connect } from 'react-redux';

import { deletePost, likePost } from '../../actions/posts';

import Avatar from '../../assets/images/man.png';
import Laptop from '../../assets/images/laptop.jpg';
import Like from '../../assets/icons/Like';
import Comment from '../../assets/icons/Comment';
import Share from '../../assets/icons/Share';
import Bin from '../../assets/icons/Bin';

import '../../common/home/post.scss';

const Post = ({ postId, postText, author, time }) => {
  const dispatch = useDispatch();

  return (
    <div className="Feed__Post">
      <div className="Feed__Post__Header">
        <div className="Feed__Post__Left">
          <div className="Feed__Post__Header-photo">
            <img src={Avatar} />
          </div>
          <div className="Feed__Post__Header-info">
            <div className="FeedPost__Header-info-name">{author}</div>
            <div className="FeedPost__Header-info-time">{time}</div>
          </div>
        </div>
        <div className="Feed__Post__Right">
          <div
            onClick={() => dispatch(deletePost(postId))}
            className="Feed__Post__Delete"
          >
            <Bin />
          </div>
        </div>
      </div>
      <div className="Feed__Post__Text">{postText}</div>
      <div className="Feed__Post__Photos">
        <div className="Feed__Post__Photo">
          <img src={Laptop} />
        </div>
      </div>
      <div className="Feed__Post__Reactions">
        <div
          onClick={() => dispatch(likePost(postId))}
          className="Feed__Post__Reaction"
        >
          <Like />
          Like
        </div>
        <div className="Feed__Post__Reaction">
          <Comment />
          Comment
        </div>
        <div className="Feed__Post__Reaction">
          <Share />
          Share
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  postId: PropTypes.string.isRequired,
  postText: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default Post;
