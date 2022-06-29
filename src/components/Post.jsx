import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  const { id, title, text } = post;
  return (
    <div className="d-flex flex-column">
      <span>Id: {id}</span>
      <span>Title: {title}</span>
      <span>Content: {text}</span>
      <Link to={`/posts/${id}`}>View post</Link>
      <hr />
    </div>
  );
}

export default Post;
