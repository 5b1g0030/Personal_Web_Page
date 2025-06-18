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

            {/* 課程心得 */}
            <section className="about-section">
              <div className="about-title">
                <div className="orange-bar"></div>
                <span>對「網頁設計」的課程心得</span>
              </div>
              <div style={{ fontSize: '1.2rem', lineHeight: '1.6', fontWeight: 'bold', color: '#003366'}}>
                在這門課程，我學會怎麼使用HTML,CSS,Javascript來設計自己的網站，
                過程中使用ai輔助寫程式，藉此學習到更多的程式語法和技巧。
                <br />
                老師在課堂上把各種概念講得很清楚，有時也會補充一些在實作上會用到的工具，
                並教導我們如何使用這些工具來提升開發效率。
                <br />
                這門課讓我對網頁的前端開發有了更深入的了解，從實際學習到的知識量來看，
                我覺得這門課程的內容非常充實。
              </div>
              
            </section>
          </div>

          
         

          {/* ✅ 圖片從 public 資料夾引入 */}
          <div className='about-images'>
            <img src='./img/Myimg.jpg' alt='個人照片' className='about-image-Myimg'></img>
            <img src="./img/p.png" className="about-image-p" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default About;
