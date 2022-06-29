import React, { useState } from 'react';
import PostService from '../services/PostService';
import { useNavigate } from 'react-router-dom';

function AddPost() {
    const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    text: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPost = async () => {
      const data = PostService.add(form);
      if (data) {
        navigate('/posts')
      }
    };
    addPost();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex flex-column">
        <label htmlFor="title">Title</label>
        <input
          name="title"
          id="title"
          type="text"
          value={form.title}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <label htmlFor="text">Content</label>
        <input
          name="text"
          id="text"
          type="text"
          value={form.text}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <button>Add post</button>
      </form>
    </div>
  );
}

export default AddPost;
