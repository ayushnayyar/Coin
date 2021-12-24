import React from 'react';

import Avatar from '../../assets/images/man.png';

import '../../common/people/people-card.scss';

const PeopleCard = () => {
  return (
    <div className="PeopleCard">
      <div className="PeopleCard__Details">
        <div className="PeopleCard__Image">
          <img src={Avatar} />
        </div>
        <div className="PeopleCard__Name">Ayush Nayyar</div>
      </div>
      <div className="PeopleCard__Button">Remove</div>
    </div>
  );
};

export default PeopleCard;
