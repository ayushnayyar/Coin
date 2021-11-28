import React, { useState } from 'react';
import GoogleButton from 'react-google-button';

// import Google from '../../assets/icons/Google';

import '../../common/login/details-section.scss';

const DetailsSection = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="Details__Section">
      <div className="Details__Section__Heading">Let&apos;s get started.</div>
      <div className="Details__Section__Switch">
        <div className="Details__Section__Switch-text">
          Already have an account?
        </div>
        &nbsp;
        <div
          onClick={() => setLogin(!login)}
          className="Details__Section__Switch-button"
        >
          {login ? 'Sign in.' : 'Register.'}
        </div>
      </div>
      <div className="Details__Section__Google">
        <GoogleButton />
      </div>
      <div className="Details__Section__Seperator">
        <div /> &nbsp; or &nbsp; <div />
      </div>
      <div className="Details__Section__FormSection">
        <form className="Details__Section__Form">
          <label>Email address</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <div className="Details__Section__Terms">
            <input type="checkbox" />
            <label>
              I agree to Coin&apos;s Terms of Service and Privacy Policy
            </label>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default DetailsSection;
