import React, { useState } from 'react';
import { useEffect } from 'react';
import PostService from '../services/PostService';
import Post from '../components/Post';
import { useNavigate } from 'react-router-dom';

function AppPosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await PostService.getAll();
      console.log(data);
      if (data) {
        setPosts(data);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (postId) => {
    const deletePost = async () => {
      await PostService.delete(postId);
      const newPosts = posts.filter(({ id }) => id !== postId);
      setPosts(newPosts);
    };
    deletePost();
  };

  return (
    <div>
      <h4>Posts</h4>
      {posts.length > 0
        ? posts.map((post) => (
            <Post key={post.id} post={post} handleEdit={handleEdit} handleDelete={handleDelete} />
          ))
        : 'no posts'}
    </div>
  );
}

export default AppPosts;
