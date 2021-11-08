import React from 'react';
import PropTypes from 'prop-types';

import '../../common/home/follow-request.scss';

const FollowRequest = ({ name, profilePicture }) => {
  return (
    <div className="FollowRequest__Card">
      <div className="FollowRequest__Content">
        <div className="FollowRequest__Image">
          <img src={profilePicture} />
        </div>
        <div className="FollowRequest__Text">
          <span className="FollowRequest__Name">{name}</span>
          &nbsp;wants to follow you
        </div>
      </div>
      <div className="FollowRequest__Buttons">
        <div className="FollowRequest__Buttons-accept">Accept</div>
        <div className="FollowRequest__Buttons-decline">Decline</div>
      </div>
    </div>
  );
};

FollowRequest.propTypes = {
  name: PropTypes.string.isRequired,
  profilePicture: PropTypes.string,
};

export default FollowRequest;
