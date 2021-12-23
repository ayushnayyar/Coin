import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ color }) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="22px"
      height="22px"
    >
      <path d="M26 11A1 1 0 1 0 26 13 1 1 0 1 0 26 11zM15 2A1 1 0 1 0 15 4 1 1 0 1 0 15 2zM4 11A1 1 0 1 0 4 13 1 1 0 1 0 4 11zM25 11h-3V6c0-.552.448-1 1-1h1c.552 0 1 .448 1 1V11z" />
      <path d="M15 3v10h11l.681-1.732L15.678 2.267 15 3zM14.322 2.267L3.319 11.268 4 13h11V3L14.322 2.267z" />
      <path d="M5,12v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V12H5z M22,23h-4v-8h4V23z" />
    </svg>
  );
};

Home.propTypes = {
  color: PropTypes.string,
};

export default Home;
