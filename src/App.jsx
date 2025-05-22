// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// 引入元件
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <nav>
        <Link to="/">首頁</Link> | <Link to="/about">關於</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
