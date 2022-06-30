import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post, handleEdit, handleDelete }) {
  const { id, title, text, comments } = post;

  return (
    <div className="d-flex flex-column">
      <span>Id: {id}</span>
      <span>Title: {title}</span>
      <span>Content: {text}</span>
      <span>Number of comments: {comments.length}</span>
      <Link to={`/posts/${id}`}>View post</Link>
      <button onClick={() => handleEdit(id)}>edit</button>
      <button onClick={() => handleDelete(id)}>delete</button>
      <hr />
    </div>
  );
}

export default Post;
