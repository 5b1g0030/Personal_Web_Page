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
  { key: "image", label: "影像處理", content:
    <>
      <h3>📌5. 影像處理</h3>
        <div className="slide-content-divRow">
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅影像擷取（Image Acquisition）</p>
              使用攝影機或感測器從環境中取得原始影像。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅影像前處理（Image Preprocessing）</p>
              包含去雜訊、增強對比、灰階化、邊緣檢測等，以提高後續辨識或分析的準確性。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅物件偵測與辨識（Object Detection and Recognition）</p>
              判斷影像中有哪些物體、物體的位置、類別，例如使用卷積神經網路（CNN）進行分類。
          </div>          
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅特徵提取與追蹤（Feature Extraction and Tracking）</p>
              擷取影像中有用的特徵（如角點、邊緣、形狀），並追蹤其隨時間的變化，用於導航或動作判斷。
          </div>          
        </div>
    </>
   },
  { key: "design", label: "設計與優化", content:
    <>
      <h3>📌 4. 設計與體驗優化</h3>
        <div className="slide-content-divRow">
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 外觀設計</p>
              3D 模型設計 (Blender、Fusion 360)。
              材質選擇與可製作性 (例如 3D 列印或 CNC 加工)。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 互動設計</p>
              擬人化設計 (可愛度提升的表情、動作、聲音)。
              個性化設定與自訂功能。
          </div>
          <div className="silde-content-divCol">
            <p style={{fontWeight: "bold"}}>✅ 使用者體驗 (UX)</p>
              簡單易用的設定介面。
              長期陪伴的舒適感 (例如學習用戶的習慣或給予適當回應)。
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
];

function Information() {
  // openkey: 紀錄目前哪個標題被展開(key)
  // setOpenKey(): 一個函式，用來改變openkey的值
  // useState(): 一個函式，設定openkey的初始值(null)

  // const [狀態值, 設定狀態的函式] = useState(初始值);
  const [openKey, setOpenKey] = useState(null);

  // 紀錄使用者點選的標題
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
            {/* 把titles的資料取出來給item，再依序處理成網面上的右拉選單 */}
            {titles.map((item) => (
              <div key={item.key} className="info-row">
                {/* 條件class: 如果該標題被點擊，在info-title後面加active，達成發出光暈的效果 */}
                <div
                  className={`info-title${openKey === item.key ? " active" : ""}`}
                  onClick={() => handleTitleClick(item.key)}
                >
                  {item.label} {/* 選單標題 */}
                </div>
                <div
                  className={`slide-content${openKey === item.key ? " open" : ""}`}
                >
                  {item.content} {/* 選單文字內容 */}
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
