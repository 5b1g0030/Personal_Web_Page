import { Link } from 'react-router-dom';
import './Research.css';

function Research() {
  return (
    <div className="research-bg">
      <nav className="research-navbar">
        <Link to="/" className="research-navlink">Home</Link>
        <Link to="/about" className="research-navlink">About</Link>
        <Link to="/projects" className="research-navlink">Projects</Link>
      </nav>
      <div className="research-container">
        <div className="research-section column">
          <span className="research-title">研究主題</span>
          <div>一個主打 可愛、互動、自主探索、陪伴的桌面寵物機器人，結合影像處理和AI學習技術，
             實現能識別物體與根據視覺資料提供不同反應的小型機器人。
          </div>
        </div>
        <div className="research-section column">
          <span className="research-title">研究動機</span>
          <div>本人在無聊時會跟AI聊天，它能夠解答我任何的問題， 
            加上無意間發現了一個Emo Robot 智慧桌面寵物AI 機器人的影片， 
            裡面的互動讓我十分羨慕，剛好老師讓我想一 個研究方向， 所以我決定從這方向入手，
            打造屬於自己的機器人。
          </div>
        </div>
        <div className="research-section">
          <img src="./img/EMORobot.jfif" alt="EMO Robot" className="research-img" />
          <div>
            <Link to="/information" className="research-title research-title-link">相關知識</Link>
            <div>關於可能會用到的技術</div>
          </div>
        </div>
        <div className="research-section">
          <img src="./img/rasberryPi/rasberryPi5.jpg" alt="rasberryPi5" className="research-img" />
          <div>
            <Link to="/rasberrypi" className="research-title research-title-link">樹梅派介紹</Link>
            <div>關於樹梅派</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
