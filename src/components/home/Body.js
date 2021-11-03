import React from 'react';

import NavSection from './NavSection';
import FeedSection from './FeedSection';
import PeopleSection from './PeopleSection';

import '../../common/home/body.scss';

const Body = () => {
  return (
    <div className="Body">
      <div className="NavSection">
        <NavSection />
      </div>
      <div className="FeedSection">
        <FeedSection />
      </div>
      <div className="PeopleSection">
        <PeopleSection />
      </div>
    </div>
  );
};

export default Body;
