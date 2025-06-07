import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

function Research() {

  const [showImg, setShowImg] = useState(null); // 紀錄浮動視窗開啟與關閉

  return (
    <div className="research-bg">
      <div className="research-inner">
        <nav className="research-navbar">
          <Link to="/" className="research-navlink">Home</Link>
          <Link to="/about" className="research-navlink">About</Link>
          <Link to="/projects" className="research-navlink">Projects</Link>
        </nav>
        <div className="research-container">

          {/* 範例：滑鼠移到這段文字時顯示圖片 */}
          {/* <div style={{ display: 'inline-block', position: 'relative' }}>
            <div
              onMouseEnter={() => setShowImg('ex')}
              onMouseLeave={() => setShowImg(null)}
              className='show-img-text'
            >
              範例
            </div>

            {showImg==='ex' && (
              <div className='show-img-div'>
                <img className='show-img' src="./img/documents/111-2_Elite.jpg" alt="展示圖片" width={400} />
              </div>
            )}

          </div> */}

          {/* 證照資料 */}
          <div className="research-section column">
            <span className="research-title">證照</span>
            <div>
              目前的證照: 電腦軟體應用丙級、網頁設計丙級
              <div className='doc-img'>
                
                 {/* 軟體應用證照 */}
                <div style={{ display: 'inline-block', position: 'relative' }}>
                  <div
                    onMouseEnter={() => setShowImg('soft')}
                    onMouseLeave={() => setShowImg(null)}
                    className='show-img-text'
                  >
                    電腦軟體應用丙級證照
                  </div>
      
                  {showImg==='soft' && (
                    <div className='show-img-div'>
                      <img className='show-img' src="./img/documents/softwareDoc.png" alt="展示圖片" width={400} />
                    </div>
                  )}
                </div>

                {/* 網頁設計證照 */}
                <div style={{ display: 'inline-block', position: 'relative' }}>
                  {/* 範例：滑鼠移到這段文字時顯示圖片 */}
                  <div
                    onMouseEnter={() => setShowImg('web')}
                    onMouseLeave={() => setShowImg(null)}
                    className='show-img-text'
                  >
                    網頁設計丙級證照
                  </div>
      
                  {showImg==='web' && (
                    <div className='show-img-div'>
                      <img className='show-img' src="./img/documents/webDoc.png" alt="展示圖片" width={400} />
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* 研究資料 */}
          <div className="research-section">
            <img src="./img/EMORobot.jfif" alt="EMO Robot" className="research-img" />
            <div>
              <span className="research-title">研究主題</span>
              <div>
                我目前想做一個主打 可愛、互動、自主探索、陪伴的桌面寵物機器人，結合影像處理和AI學習技術，
                實現能識別物體與根據視覺資料提供不同反應的小型機器人。
                打算用「Rasberry Pi 5」開發，並使用「Python」語言進行程式設計。
                外殼計畫使用3D列印技術製作，目前還在學習。
              </div>
              <a className='research-ppt' href='https://docs.google.com/presentation/d/1VZl0gv2-jLzusXM4jmW3IYA-ruBMpTWsRXgi74adXgs/edit' target='_blank'>研究過程簡報</a>
            </div>
          </div>

          {/* 學習經歷 */}
          <div className="research-section column">
            <span className="research-title">學習經歷</span>
            <div>


            </div>
          </div>

          {/* <div className="research-section">

            <div>
              <Link to="/information" className="research-title research-title-link">相關知識</Link>
              <div>關於可能會用到的技術</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Research;
