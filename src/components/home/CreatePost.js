import React, { useState, useEffect } from 'react';

import Avatar from '../../assets/images/man.png';
import Plus from '../../assets/icons/Plus';

import '../../common/home/create-post.scss';

const CreatePost = () => {
  const [rows, setRows] = useState(1);
  const [value, setValue] = useState('');

  useEffect(() => {
    const rowlen = value.split('\n');

    if (rowlen.length >= 1) {
      setRows(rowlen.length);
    }
  }, [value]);

  return (
    <div className="Create__Post">
      <div className="Create__Post__Logo">
        <img src={Avatar} />
      </div>
      <div className="Create__Post__TextField">
        <textarea
          onChange={(text) => {
            setValue(text.target.value);
          }}
          rows={rows}
          type="text"
          placeholder=" What's new, Ayush?"
        />
      </div>
      <div className="Create__Post__Button">
        <button
          onClick={() => {
            console.log('Clicked');
          }}
        >
          <Plus />
          Create
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
