import { Link } from 'react-router-dom';
import './Home.css'; // 對應 CSS 樣式

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">我的個人網站</h1>
      <div className="button-group">
        <Link to="/research" className="nav-button">我的研究</Link>
        <Link to="/projects" className="nav-button">其他專案</Link>
        <Link to="/about" className="nav-button">自我介紹</Link>
      </div>
    </div>
  );
}

export default Home;
