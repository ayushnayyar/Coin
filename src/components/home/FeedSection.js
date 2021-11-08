import React from 'react';

import Post from './Post';

import '../../common/home/feed.scss';
import SectionHeading from '../SectionHeading';

const FeedSection = () => {
  return (
    <section className="Feed">
      <SectionHeading heading="Home" />
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
