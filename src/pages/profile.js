import React from 'react';

import Posts from '../components/profile/Posts';
import ProfileCard from '../components/profile/ProfileCard';
import SectionHeading from '../components/SectionHeading';

import '../common/profile/profile-page.scss';

const Profile = () => {
  return (
    <div className="Profile__Card">
      <SectionHeading heading="Profile" />
      <div className="Profile__Card__Profile">
        <ProfileCard />
      </div>
      <SectionHeading heading="Posts" />
      <div className="Profile__Card__Posts">
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
