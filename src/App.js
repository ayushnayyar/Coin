import React, { useEffect } from 'react';
import Routes from './routes';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import { getFriendRequests } from './actions/requests';
import './common/app.scss';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getFriendRequests(user?.result._id));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
