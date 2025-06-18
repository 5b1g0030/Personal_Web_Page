import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Research.css';

function Research() {

  const [showImg, setShowImg] = useState(null); // 紀錄浮動視窗開啟與關閉

  return (
    <div className="research-bg">
      <div className="research-inner">
        <nav className="research-navbar">
          <Link to="/" className="research-navlink">回首頁</Link>
          <Link to="/about" className="research-navlink">關於我</Link>
          <Link to="/projects" className="research-navlink">課程專案</Link>
        </nav>
        <div className="research-container">

          {/* 證照資料 */}
          <div className="research-section column">
            <span className="research-title">證照</span>
            <div>
              目前的證照: 電腦軟體應用丙級、網頁設計丙級
              <div className='doc-img' style={{marginTop: '10px'}}>

                {/* 軟體應用證照 */}
                <img src="./img/documents/softwareDoc.png" className='doc-img-border' alt="軟體應用證照" width={250} />

                {/* 網頁設計證照 */}
                <img src="./img/documents/webDoc.png" className='doc-img-border' alt="網頁設計證照" width={250} />
                

              </div>
            </div>
          </div>

          {/* 研究資料 */}
          <div className="research-section">
            <img src="./img/EMORobot.jfif" alt="EMO Robot" className="research-img" />
            <div>
              <span className="research-title" style={{marginBottom: '10px'}}>目前的研究主題</span>
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
            <div className='research-small-title-group'>
              <span className='research-small-title'>學業成績</span>
              <div className='doc-img-text'>
                一到三年級的學業成績基本都落在A+ ~ B+之間，
                111學年第2期到113學年第1學期都有持續領到「學業菁英獎」及獎學金。
                <div className='doc-img'>

                  {/* 111-2菁英獎 */}
                  {/* 定位方法: HTML建立定位基準(以這容器為基準)；CSS根據這基準定位到他旁邊 */}
                  <div style={{ display: 'inline-block', position: 'relative' }}>
                    {/* 滑鼠移入時，紀錄要顯示的圖片名稱；滑鼠移出時，設為null */}
                    <div
                      onMouseEnter={() => setShowImg('111-2E')}
                      onMouseLeave={() => setShowImg(null)}
                      className='show-img-text'
                    >
                      111-2菁英獎
                    {/* 如果紀錄的名稱相符，則顯示該圖片 */}
                    </div>
                    {showImg === '111-2E' && (
                      <div className='show-img-div'>
                        <img className='show-img' src="./img/documents/111-2_Elite.jpg" alt="111-2菁英獎" width={400} />
                      </div>
                    )}
                  </div>

                  {/* 112-1菁英獎 */}
                  <div style={{ display: 'inline-block', position: 'relative' }}>
                    <div
                      onMouseEnter={() => setShowImg('112-1E')}
                      onMouseLeave={() => setShowImg(null)}
                      className='show-img-text'
                    >
                      112-1菁英獎
                    </div>

                    {showImg === '112-1E' && (
                      <div className='show-img-div'>
                        <img className='show-img' src="./img/documents/112-1_Elite.jpg" alt="112-1菁英獎" width={400} />
                      </div>
                    )}
                  </div>

                  {/* 112-2菁英獎 */}
                  <div style={{ display: 'inline-block', position: 'relative' }}>
                    <div
                      onMouseEnter={() => setShowImg('112-2E')}
                      onMouseLeave={() => setShowImg(null)}
                      className='show-img-text'
                    >
                      112-2菁英獎
                    </div>

                    {showImg === '112-2E' && (
                      <div className='show-img-div'> {/* up class用來調整圖片位置 */}
                        <img className='show-img' src="./img/documents/112-2_Elite.jpg" alt="112-2菁英獎" width={400} />
                      </div>
                    )}
                  </div>

                  {/* 113-1菁英獎 */}
                  <div style={{ display: 'inline-block', position: 'relative' }}>
                    <div
                      onMouseEnter={() => setShowImg('113-1E')}
                      onMouseLeave={() => setShowImg(null)}
                      className='show-img-text'
                    >
                      113-1菁英獎
                    </div>

                    {showImg === '113-1E' && (
                      <div className='show-img-div'> {/* up class用來調整圖片位置 */}
                        <img className='show-img' src="./img/documents/113-1_Elite.jpg" alt="113-1菁英獎" width={400} />
                      </div>
                    )}
                  </div>

                </div>
              </div>


              <span className='research-small-title'>相關課程</span>
              <div className='doc-img-text'>
                目前有上過「C、C++、C#、Python、HTML、CSS、Javascript、MySQL、Lunix」等方面的課程，比較擅長Python。
              </div>

              <span className='research-small-title'>完成過的專案</span>
              <div className='doc-img-text'>
                  <b>專案：光碟機製作的2D繪圖機(影片、外型)</b><br></br>
                  使用arduino控制光碟步進馬達，並用Python寫程式控制繪圖筆的移動。
                  此機器人可以在紙上繪製簡單的圖形，但無法繪製線條過於密集或細緻的圖形，
                  運作時會小概率發生錯誤導致向影片中這樣線條跑到異常的位置，猜測是步進馬達移動時卡頓造成。
                  <div className='doc-img'>
                    <iframe
                      src='https://drive.google.com/file/d/1AEiE9j9lZxRg4_FLVNxBYzAj0XBrUA7O/preview'
                      width='400'
                      height='300'
                      allowFullScreen
                      title='光碟機製作的2D繪圖機'
                      style={{border: '3px solid black', borderRadius: '10px', marginTop: '10px'}}
                    ></iframe>
                    <img src='./img/documents/draw2D.jpg' className='doc-img-border' style={{marginTop: '10px'}} alt='2D繪圖機外型' width='300' height='300' />
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>);
}

export default Research;
