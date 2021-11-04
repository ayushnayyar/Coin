import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../../assets/images/man.png';

import '../../common/home/nav-section.scss';

const NavSection = () => {
  const [isLinkActive, setLinkActive] = useState('Home');

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'People', to: '/people' },
    { name: 'Photos', to: '/photos' },
    { name: 'Profile', to: '/profile' },
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
              setLinkActive(link.name);
              window.history.replaceState(null, null, link.to);
            }}
            className={`${
              isLinkActive === link.name
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
                {link.name}
              </NavLink>
            </div>
          </div>
        ))}
        {/* <div className="NavSection__Link">
          <div className="NavSection__Link-box">
            <NavLink
              activeClassName="NavSection__Link-text-active"
              className="NavSection__Link-text"
              exact
              to="/"
            >
              Home
            </NavLink>
          </div>
        </div>
        <div className="NavSection__Link">
          <div className="NavSection__Link-box">
            <NavLink
              activeClassName="NavSection__Link-text-active"
              className="NavSection__Link-text"
              exact
              to="/"
            >
              People
            </NavLink>
          </div>
        </div>
        <div className="NavSection__Link">
          <div className="NavSection__Link-box">
            <NavLink
              activeClassName="NavSection__Link-text-active"
              className="NavSection__Link-text"
              exact
              to="/"
            >
              Photos
            </NavLink>
          </div>
        </div>
        <div className="NavSection__Link">
          <div className="NavSection__Link-box">
            <NavLink
              activeClassName="NavSection__Link-text-active"
              className="NavSection__Link-text"
              exact
              to="/"
            >
              Profile
            </NavLink>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default NavSection;
