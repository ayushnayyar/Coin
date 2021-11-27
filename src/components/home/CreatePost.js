import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '../../assets/images/man.png';
import Plus from '../../assets/icons/Plus';

import { createPost } from '../../actions/posts';
import '../../common/home/create-post.scss';

const CreatePost = () => {
  const dispatch = useDispatch();

  const [rows, setRows] = useState(1);
  // const [postText, setPostText] = useState('');
  const [postData, setPostData] = useState({
    creator: 'Ayush Nayyar',
    description: '',
    tags: '',
    selectedFile: '',
  });

  useEffect(() => {
    const rowlen = postData.description.split('\n');

    if (rowlen.length >= 1) {
      setRows(rowlen.length);
    }
  }, [postData.description]);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(createPost(postData));
  };

  return (
    <div className="Create__Post">
      <div className="Create__Post__Logo">
        <img src={Avatar} />
      </div>
      <form
        className="Create__Post__Form"
        autoComplete="off"
        noValidate
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="Create__Post__TextField">
          <textarea
            onChange={(text) => {
              setPostData({ ...postData, description: text.target.value });
              // setPostText(text.target.value);
            }}
            value={postData.description}
            rows={rows}
            type="text"
            placeholder=" What's new, Ayush?"
          />
        </div>
        <div className="Create__Post__Button">
          <button
            type="submit"
            onClick={() => {
              console.log('Clicked');
            }}
          >
            <Plus />
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
