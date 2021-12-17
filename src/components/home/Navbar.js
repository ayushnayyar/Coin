import React, { useState } from 'react';
import PropTypes from 'react';

import '../../common/home/navbar.scss';
import Avatar from '../../assets/images/man.png';
import Plus from '../../assets/icons/Plus.js';
import Menu from './Menu';

const Navbar = ({ logout }) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="Wrapper">
      <div className="Navbar">
        <div onClick={toggleClass} className="Navbar__Link Navbar__Link-toggle">
          <Menu />
        </div>
        <nav
          className={`${isActive ? 'Navbar__ToggleShow' : null} Navbar__Items`}
        >
          <div className="Navbar__Link Navbar-brand">Coin</div>

          {/* <div className="Navbar__Link">Test Link 1</div>
          <div className="Navbar__Link">Test Link 2</div>
          <div className="Navbar__Link">Test Link 3</div> */}
        </nav>
        <nav
          className={`${
            isActive ? 'Navbar__ToggleShow' : null
          } Navbar__Items Navbar__Items--right`}
        >
          <div className="Navbar__Link Navbar-button">
            <button
              onClick={() => {
                console.log('Clicked');
              }}
            >
              <Plus />
              Create
            </button>
          </div>
          <div onClick={() => logout()} className="Navbar__Link Navbar-avatar">
            <img src={Avatar} />
          </div>
          {/* <div className="Navbar__Link">Right Link 2</div> */}
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logout: PropTypes.function,
};

export default Navbar;
