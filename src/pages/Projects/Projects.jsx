import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Projects.css"; // 引用css

function Projects() {
  const [iframeSrc, setIframeSrc] = useState(""); // 用於存儲iframe的src
  const defaultImg = './img/background/background1.webp'; // 預設背景圖片

  return (
    <div className="project-bg">
      <nav className="nav-link">
        <Link to="/" className="link-button">回首頁</Link>
        <Link to="/research" className="link-button">其他資料</Link>
        <Link to="/about" className="link-button">關於我</Link>
      </nav>
      {/* 專題導覽列 */}
      <nav className="button-pad">
        <a className="a-button" onClick={() => setIframeSrc("https://5b1g0030.github.io/20250320_JavaScript/game.html")}>試管倒水</a>
        <a className="a-button" onClick={() => setIframeSrc("https://5b1g0030.github.io/React_calculator/")}>計算機</a>
        <a className="a-button" onClick={() => setIframeSrc("https://5b1g0030.github.io/20250320_JavaScript/homework.html")}>n*n乘法表</a>
        <a className="a-button" onClick={() => setIframeSrc("https://5b1g0030.github.io/Tic-Tac-Toe/")}>井字遊戲</a>
        <a className="a-button" onClick={() => setIframeSrc("https://5b1g0030.github.io/2025-react-app/")}>RGB面板</a>
      </nav>
      <div className="gamepad-display">
        {/* 當iframeSrc */}
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title="內容顯示"
            width="100%"
            height="100%"
            style={{ border: "none", borderRadius: "15px", backgroundSize: "10px" }}
          />
        ) : (
          <img
            src={defaultImg}
            alt="預設背景"
            style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px"}}
          />
        )}
      </div>
    </div>
  );
}
export default Projects;
