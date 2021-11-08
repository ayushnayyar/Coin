import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';

import Avatar from '../../assets/images/man.png';
import Home from '../../assets/icons/Home';
import People from '../../assets/icons/People';
import Profile from '../../assets/icons/Profile';
import Photos from '../../assets/icons/Photos';

import '../../common/home/nav-section.scss';

const NavSection = () => {
  let history = useHistory();
  // let location = useLocation();
  const [isLinkActive, setLinkActive] = useState(history.location.pathname);
  console.log(history.location.pathname);

  const navLinks = [
    { name: 'Home', to: '/', icon: <Home /> },
    { name: 'People', to: '/people', icon: <People /> },
    { name: 'Photos', to: '/photos', icon: <Photos /> },
    { name: 'Profile', to: '/profile', icon: <Profile /> },
  ];
  return (
    <section className="NavSection__Card">
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

      <div className="NavSection__Nav">
        {navLinks.map((link) => (
          <div
            onClick={() => {
              setLinkActive(link.to);
              history.replace(link.to);
              // window.history.replaceState(null, null, link.to);
            }}
            className={`${
              isLinkActive === link.to
                ? 'NavSection__Link-active'
                : 'NavSection__Link'
            }`}
            key={link.name}
          >
            <div className="NavSection__Link-box">
              <NavLink
                activeClassName="NavSection__Link-text-active"
                className="NavSection__Link-text"
                exact
                to={link.to}
              >
                <div className="NavSection__Link-text-align">
                  {link.icon}
                  <div className="NavSection__Link-text-space"></div>
                  {link.name}
                </div>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavSection;
