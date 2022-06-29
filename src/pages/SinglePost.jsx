import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../services/PostService';

function SinglePost() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await PostService.getById(id);
      if (data) {
        setPost(data);
      }
    };
    if (id) {
      fetchData();
    }
  }, []);

  return (
    <div className="d-flex flex-column">
      <span>Id: {post.id}</span>
      <span>Title: {post.title}</span>
      <span>Content: {post.text}</span>
    </div>
  );
}

export default SinglePost;
