import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions/auth';

// import Google from '../../assets/icons/Google';

import '../../common/login/details-section.scss';
// import { useHistory } from 'react-router';

const DetailsSection = () => {
  // const [signedIn, setSignedIn] = useState(false);
  const [login, setLogin] = useState(false);
  // const [auth, setAuth] = useState(null);

  // const history = useHistory();

  // const onAuthChange = (isSignedIn) => {
  //   if (isSignedIn) {
  //     this.props.signIn();
  //   } else {
  //     this.props.signOut();
  //   }
  //   setSignedIn(auth.isSignedIn.get());

  //   console.log(signedIn);

  //   if (signedIn) {
  //     history.push('/');
  //   }
  // };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/v1/auth/google', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    // store returned user somehow
  };

  // const onSignInClick = () => {
  //   auth.signIn();
  // };

  // useEffect(() => {
  //   window.gapi.load('client:auth2', () => {
  //     window.gapi.client
  //       .init({
  //         clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //         scope: 'email',
  //       })
  //       .then(() => {
  //         setAuth(window.gapi.auth2.getAuthInstance());
  //         onAuthChange(auth);
  //         auth.isSignedIn.listen(() => onAuthChange(auth));
  //       });
  //   });

  //   return () => {
  //     // setAuth(null);
  //     // setLogin(false);
  //     // setSignedIn(false);
  //   };
  // });

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
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleLogin}
          cookiePolicy={'single_host_origin'}
        />
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

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(DetailsSection);
