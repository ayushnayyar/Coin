import React from 'react';

import Avatar from '../../assets/images/man.png';

import '../../common/profile/profile-card.scss';

const ProfileCard = () => {
  return (
    <div className="ProfileSection__ProfileCard">
      <div className="ProfileSection__ProfileCard-image">
        <img src={Avatar} />
      </div>
      <div className="ProfileSection__ProfileCard-info-section">
        <div className="ProfileSection__ProfileCard-info">
          <div className="ProfileSection__ProfileCard-info-name">
            Ayush Nayyar
          </div>
          <div className="ProfileSection__ProfileCard-info-username">
            @ayushnayyar
          </div>
        </div>
        <div className="ProfileSection__ProfileCard-stats">
          <div className="ProfileSection__ProfileCard-posts">
            <div className="ProfileSection__ProfileCard-posts-heading">
              Posts
            </div>
            <div className="ProfileSection__ProfileCard-posts-count">23</div>
          </div>
          <div className="ProfileSection__ProfileCard-followers">
            <div className="ProfileSection__ProfileCard-followers-heading">
              Followers
            </div>
            <div className="ProfileSection__ProfileCard-followers-count">
              1M
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
