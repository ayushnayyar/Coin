import React from 'react';

import Avatar from '../../assets/images/man.png';

import '../../common/home/nav-section.scss';

const NavSection = () => {
  return (
    <div className="NavSection__Card">
      <div className="NavSection__ProfileCard">
        <div className="NavSection__ProfileCard-image">
          <img src={Avatar} />
        </div>
        <div className="NavSection__ProfileCard-info">
          <div className="NavSection__ProfileCard-info-name">Ayush Nayyar</div>
          <div className="NavSection__ProfileCard-info-username">
            @ayushnayyar
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
