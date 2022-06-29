import './App.css';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import AppPosts from './pages/AppPosts';

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
          <Route path="*" element={<Navigate to="/posts" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
