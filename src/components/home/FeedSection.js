import React from 'react';

import Post from './Post';
import SectionHeading from '../SectionHeading';
import CreatePost from './CreatePost';

import '../../common/home/feed.scss';

const FeedSection = () => {
  return (
    <section className="Feed">
      <SectionHeading heading="Home" />
      <CreatePost />
      <Post
        author="Ayush Nayyar"
        time="12 hours ago"
        postText="Testing the post text prop."
      />
      <Post
        author="Tanushree Lahane"
        time="17 hours ago"
        postText="Testing the post text prop."
      />
      <Post
        author="Anay Joshi"
        time="23 hours ago"
        postText="Testing the post text prop."
      />
      <Post
        author="Ayush Nayyar"
        time="12 hours ago"
        postText="Testing the post text prop."
      />
      <Post
        author="Tanushree Lahane"
        time="17 hours ago"
        postText="Testing the post text prop."
      />
      <Post
        author="Anay Joshi"
        time="23 hours ago"
        postText="Testing the post text prop."
      />
    </section>
  );
};

export default FeedSection;
