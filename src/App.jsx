import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/* 引入元件 */}
import Home from './pages/Home/Home';
import Research from './pages/Research/Research';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Information from './pages/Research/Information';



function App() {
  return (
      <Routes>
        {/* 個路由連結目的指定(每個文字對應的頁面) */}
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/information" element={<Information />} />
      </Routes>
  );
}

export default App;
