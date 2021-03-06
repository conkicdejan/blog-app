import React, { useState, useEffect } from 'react';
import PostService from '../services/PostService';
import { useNavigate, useParams } from 'react-router-dom';

function AddPost() {
  const navigate = useNavigate();
  const initialFormValues = {
    title: '',
    text: '',
  };
  const [form, setForm] = useState(initialFormValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = null
    if (id) {
      data = await PostService.edit(id, form);
    } else {
      data = await PostService.add(form);
    }
    if(data){
      navigate('/posts');
    }
  };

  const handleReset = () => {
    setForm(initialFormValues);
  };

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await PostService.getById(id);
      if (data) {
        setForm(data);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex flex-column col-4">
        <label htmlFor="title">Title</label>
        <input
          required
          minLength="2"
          name="title"
          id="title"
          type="text"
          value={form.title}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <label htmlFor="text">Content</label>
        <input
          required
          maxLength="300"
          name="text"
          id="text"
          type="text"
          value={form.text}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <button>{id ? 'Edit post' : 'Add post'}</button>
        <button type="button" onClick={handleReset}>
          reset form
        </button>
      </form>
    </div>
  );
}

export default AddPost;
