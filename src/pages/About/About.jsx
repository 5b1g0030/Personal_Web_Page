import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // ✅ 引入 CSS

function About() {
  return (
    <div className='about-page'>
      <div className="about-container">
        {/* 導覽列 */}
        <nav className="about-nav">
          <Link to="/">回首頁</Link>
          <Link to="/projects">課程專案</Link>
          <Link to="/research">其他資料</Link>
        </nav>

        {/* 內容區塊 */}
        <div className="about-box">
          <div className="about-text">
            {/* 基本資料 */}
            <section className="about-section">
              <div className="about-title">
                <div className="orange-bar"></div>
                <span>基本資料</span>
              </div>
              <ul className="about-list">
                  <li>姓名: 蔡一菁</li>
                  <li>電話: (+886)0930970955 / 0972840563</li>
                  <li>地址: 台灣 台南市 永康區</li>
                  <li>E-mail: 5b1g0030@stust.edu.tw</li>
                  <li>學校: 南台科技大學 <a href="https://www.stust.edu.tw/">學校網站</a></li>
                  <li>科系: 資訊工程</li>
                  <li>學歷: 五專三年級</li>
                  <li>研究指導老師：許智淵</li>
                  <li>研究主題：影像處理、智能機械</li>
              </ul>
            </section>

            {/* 我的興趣 */}
            <section className="about-section">
              <div className="about-title">
                <div className="orange-bar"></div>
                <span>我的興趣</span>
              </div>
              <ul className="about-list">
                <li>畫畫</li>
                <li>寫+看小說</li>
                <li>跟AI聊天</li>
                <li>寫程式</li>
              </ul>
            </section>

            {/* 我的夢想 */}
            <section className="about-section">
              <div className="about-title">
                <div className="orange-bar"></div>
                <span>我的夢想</span>
              </div>
              <ul className="about-list">
                <li>當一名作家</li>
                <li>當一名插畫家</li>
                <li>製作屬於自己的機器人</li>
              </ul>
            </section>
          </div>

          {/* ✅ 圖片從 public 資料夾引入 */}
          <img src="./img/p.png" alt="Portrait" className="about-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
