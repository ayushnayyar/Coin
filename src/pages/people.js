import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import SectionHeading from '../components/SectionHeading';
import PeopleCard from '../components/people/PeopleCard';
import { getFollowing } from '../actions/people';

const People = () => {
  const followingUsers = useSelector((state) => state.people.following);
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    dispatch(getFollowing(user?.result._id));
  }, [dispatch]);

  return (
    <div className="People">
      <SectionHeading heading="Following"></SectionHeading>
      {followingUsers.map((followingUser) => {
        return <PeopleCard key={followingUser._id} user={followingUser} />;
      })}
    </div>
  );
};

export default People;
