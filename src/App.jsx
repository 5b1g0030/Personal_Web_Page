import { BrowserRouter, Routes, Route } from 'react-router-dom';
{/* 引入元件 */}
import Home from './pages/Home';
import Research from './pages/Research';
import Projects from './pages/Projects';
import About from './pages/About';



function App() {
  return (
    // <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        {/* 個路由連結目的指定(每個文字對應的頁面) */}
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    //</BrowserRouter>
  );
}

export default App;
