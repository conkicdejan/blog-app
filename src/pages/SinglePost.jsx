import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../services/PostService';
import AddComment from './../components/AddComment';

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

  const handleAddComment = async (data) => {
    const newComment = await PostService.addComment(data, id);
    if (newComment) {
      setPost({ ...post, [comments]: comments.push(newComment) });
    }
  };

  const { title, text, comments } = post;
  return (
    <div className="d-flex flex-column">
      <span>Id: {id}</span>
      <span>Title: {title}</span>
      <span>Content: {text}</span>
      <AddComment addCommentCallback={handleAddComment} />
      <span>Comments:</span>
      <span>
        {comments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
              <p>{comment.text}</p>
              <hr />
            </div>
          ))}
      </span>
    </div>
  );
}

export default SinglePost;
