import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Information.css"; // 新增這行

const titles = [
  { key: "hardware", label: "硬體技術", content: "這裡介紹硬體技術相關內容。" },
  { key: "software", label: "軟體技術", content: "這裡介紹軟體技術相關內容。" },
  { key: "ai", label: "AI互動技術", content: "這裡介紹AI互動技術相關內容。" },
  { key: "image", label: "影像處理技術", content: "這裡介紹影像處理技術相關內容。" },
  { key: "design", label: "設計與優化", content: "這裡介紹設計與優化相關內容。" },
];

function Information() {
  const [openKey, setOpenKey] = useState(null);

  const handleTitleClick = (key) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <div className="info-bg">
      <div className="info-page">
          {/* 導覽列 */}
        <nav className="info-nav">
          <Link to="/" className="info-link">Home</Link>
          <Link to="/about" className="info-link">About</Link>
          <Link to="/projects" className="info-link">Projects</Link>
          <Link to="/research" className="info-link">Research</Link>
        </nav>
        {/* 標題與內容 */}
        <div className="info-main">
          <div className="info-titles">
            {titles.map((item) => (
              <div key={item.key} className="info-row">
                <div
                  className={`info-title${openKey === item.key ? " active" : ""}`}
                  onClick={() => handleTitleClick(item.key)}
                >
                  {item.label}
                </div>
                <div
                  className={`slide-content${openKey === item.key ? " open" : ""}`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Information;
