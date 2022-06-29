import React from 'react';
import { Link } from 'react-router-dom';

function Post({post}) {
  return (
    <div className='d-flex flex-column'>
      <span>Id: {post.id}</span>
      <span>Title: {post.title}</span>
      <span>Content: {post.text}</span>
      <Link to={`/posts/${post.id}`}>View post</Link>
      <hr />
    </div>
  );
}

export default Post;
