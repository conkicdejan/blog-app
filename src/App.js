import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';
import AddPost from './pages/AddPost';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/add">Add posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="posts" element={<AppPosts />} />
          <Route path="posts/:id" element={<SinglePost />} />
          <Route path="add" element={<AddPost />} />
          <Route path="edit/:id" element={<AddPost />} />
          <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
