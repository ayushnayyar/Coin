import React, { useEffect } from 'react';
import Routes from './routes';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import './common/app.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
