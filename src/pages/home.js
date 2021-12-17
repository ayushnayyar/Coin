import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Navbar from '../components/home/Navbar';
import Body from '../components/home/Body';

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/login');

    setUser(null);
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <div>
      <Navbar logout={logout} />
      <Body />
    </div>
  );
};

export default Home;
