import React, { useState } from 'react';

function AddComment({ addCommentCallback }) {
  const [form, setForm] = useState({
    text: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addCommentCallback(form);
    setForm({ text: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          name="text"
          value={form.text}
          onChange={({ target }) => setForm({ ...form, [target.name]: target.value })}
        />

        <button>Add comment</button>
      </form>
    </div>
  );
}

export default AddComment;
