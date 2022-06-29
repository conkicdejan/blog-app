import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import AppPosts from './pages/AppPosts';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="posts" element={<AppPosts />} />
          <Route path="post/:id" element={<SinglePost />} />
          <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
