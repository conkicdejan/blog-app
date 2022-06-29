import React, { useState } from 'react';
import { useEffect } from 'react';
import PostService from '../services/PostService';
import Post from '../components/Post';

function AppPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = PostService.getAll();
      if (data) {
        setPosts(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h4>Posts</h4>
      {posts.length > 0 ? posts.map((post) => <Post post={post} />) : 'no posts'}
    </div>
  );
}

export default AppPosts;
