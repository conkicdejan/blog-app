import axios from 'axios';

class PostService {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://localhost:3000/api',
    });
  }

  async getAll() {
    try {
      const { data } = await this.client.get('/posts');
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getById(postId) {
    try {
      const { data } = await this.client.get(`/posts/${postId}?filter={"include":["comments"]}`);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async add(newPost) {
    try {
      const { data } = await this.client.post(`/posts`, newPost);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async edit(postId, newData) {
    try {
      const { data } = await this.client.put(`/posts/${postId}`, newData);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(postId) {
    try {
      const { data } = await this.client.delete(`/posts/${postId}`);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async addComment(comment, postId) {
    try {
      const { data } = await this.client.post(`/posts/${postId}/comments`, comment);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getCommentsCount(postId) {
    try {
      const { data } = await this.client.get(`/posts/${postId}/comments/count`);
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new PostService();
