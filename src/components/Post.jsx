import React from 'react';

function Post(post) {
  return (
    <div className='d-flex flex-column'>
      <span>Id: {post.id}</span>
      <span>Title: {post.title}</span>
      <span>Content: {post.text}</span>
      <hr />
    </div>
  );
}

export default Post;
