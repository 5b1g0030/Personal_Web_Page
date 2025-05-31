import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Information.css"; // 引用css

// id, 標題, 文字內容
const titles = [
  { key: "hardware", label: "硬體技術", content: 
    <>
      <h3>📌 1. 硬體相關技術</h3>
        <div className="slide-content-divRow">
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 基礎硬體知識</p>
            電子學基礎：電壓、電流、電阻、電容等。
            微控制器 (如 Arduino、ESP32、Raspberry Pi) 的選擇與使用。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 感測器與輸出裝置</p>
            感測器：相機 (視覺辨識)、麥克風 (語音辨識)、紅外線距離感測器、加速度計等。
            輸出裝置：顯示螢幕 (表情顯示)、LED、喇叭 (語音/音效)、馬達 (移動、表情變化)。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 電源管理</p>
            電池種類選擇 (鋰電池、可充電電池等)。
            低功耗設計與電力管理。
          </div>
          
        </div>
    </>
  },
  { key: "software", label: "軟體技術", content: 
    <>
      <h3>📌 2. 軟體相關技術</h3>
        <div className="slide-content-divRow">
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 嵌入式系統開發</p>
              C/C++ 或 Python 編程 (ESP32、Raspberry Pi 等開發板的主流語言)。
              RTOS (即時作業系統) 的應用 (如果需要更高效能的控制)。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 應用程式開發 (電腦端或手機端)</p>
              桌面應用程式：C# (WPF/WinForms)、Python (PyQt、Tkinter) 等。
              手機應用程式：Flutter、React Native 等。
          </div>          
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 無線通訊</p>
              Bluetooth、Wi-Fi、UART 等通訊協定。
              雲端連接 (如將資料傳送到電腦或手機應用程式)。
          </div>          
        </div>
    </>
   },
  { key: "ai", label: "AI互動技術", content: 
    <>
      <h3>📌 3. AI/互動技術</h3>
        <div className="slide-content-divRow">
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 自然語言處理 (NLP)</p>
              語音辨識與合成 (如 Whisper、Google Speech-to-Text、TTS 引擎)。
              對話系統 (例如：ChatGPT、Rasa 等框架)。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 計算機視覺</p>
              物體辨識 (OpenCV、YOLO 等技術)。
              臉部偵測與表情辨識。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 機器學習與深度學習</p>
              使用 PyTorch 或 TensorFlow 訓練自訂模型。
              強化學習 (如果要讓機器人學習用戶習慣)。
          </div>          
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 行為規劃與決策系統</p>
              有限狀態機 (FSM)
              行為樹 (Behavior Tree)
              強化學習 (Reinforcement Learning)
          </div>          
        </div>
    </>
   },
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
