import React, { useState } from 'react';
import PostService from '../services/PostService';
import { useNavigate } from 'react-router-dom';

function AddPost() {
  const navigate = useNavigate();
  const initialFormValues = {
    title: '',
    text: '',
  };
  const [form, setForm] = useState(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPost = async () => {
      const data = PostService.add(form);
      if (data) {
        navigate('/posts');
      }
    };
    addPost();
  };

  const handleReset = () => {
    setForm(initialFormValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex flex-column col-4">
        <label htmlFor="title">Title</label>
        <input
          required
          minLength='2'
          name="title"
          id="title"
          type="text"
          value={form.title}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <label htmlFor="text">Content</label>
        <input
          required
          maxLength='300'
          name="text"
          id="text"
          type="text"
          value={form.text}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <button>Add post</button>
        <button type="button" onClick={handleReset}>
          reset form
        </button>
      </form>
    </div>
  );
}

export default AddPost;


