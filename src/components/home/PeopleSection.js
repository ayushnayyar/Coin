import React from 'react';

import FollowRequest from './FollowRequest';

import Avatar from '../../assets/images/man.png';

import '../../common/home/people-section.scss';

const PeopleSection = () => {
  return (
    <div className="PeopleSection__Wrapper">
      <div className="PeopleSection__Requests">
        <div className="PeopleSection__Requests-heading">
          <div className="PeopleSection__Requests-heading-text">Requests</div>
        </div>
        <div className="PeopleSection__Request">
          <FollowRequest name="Tanushree Lahane" profilePicture={Avatar} />
          <FollowRequest name="Anay Joshi" profilePicture={Avatar} />
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
