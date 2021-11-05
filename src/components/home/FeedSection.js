import React from 'react';

import Post from './Post';

import '../../common/home/feed.scss';

const FeedSection = () => {
  return (
    <section className="Feed">
      <Post />
    </section>
  );
};

export default FeedSection;
