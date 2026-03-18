TechFusion Studio - 官方形象網站
這是一個模擬技術工作室打造的現代化響應式形象網站，展示了前端切版技術、動態互動邏輯以及團隊呈現。

🛠️ 技術棧 (Tech Stack)

前端開發: HTML5, CSS3 (BEM 命名規範).

動態互動: JavaScript / jQuery 3.6.4.

視覺樣式:

Google Fonts: Noto Sans TC (提供專業的繁體中文顯示).

Font Awesome: 向量圖示增強視覺導航.

自適應設計 (RWD): 支援桌機、平板與手機端瀏覽體驗.

✨ 核心功能與亮點
1. 智慧導覽列 (Sticky Header)
-動態樣式: 當頁面捲動超過 50px 時，導覽列會自動變更背景色並加入陰影，確保在深色 Hero 區塊與白色內文區塊都有極佳的閱讀性。

-滑順捲動: 透過 jQuery 實作錨點滑順捲動 (Smooth Scroll)，並自動扣除固定式 Header 的高度，讓使用者精確抵達目標區段。

2. 響應式佈局 (Responsive Design)
-手機版選單: 針對行動裝置設計了漢堡選單 (Hamburger Menu)，並加入動態 CSS 動畫將按鈕轉化為「X」圖示。

-Grid 排版: 使用 CSS Grid 布局，在手機端自動將服務項目卡片從三欄轉換為單欄顯示。

3. 技術團隊展示 (Team Showcase)
-動態成員頁面: team.html 整合了專業的團隊成員資訊，包含圓形裁剪頭像與社交媒體連結效果。

4. 聯絡表單 (Contact Form)
-即時回饋: contact.html 內建完整的前端驗證表單，並透過 jQuery 捕捉送出事件，提供友善的互動回饋。

📂 檔案結構說明

-index.html: 網站首頁，包含 Hero 區塊、服務項目介紹。

-team.html: 技術團隊成員介紹頁。

-contact.html: 聯絡我們表單頁面。

-style.css: 核心樣式表，包含全域變數定義、RWD 斷點設定與 BEM 組件。

-script.js: 前端互動邏輯，包含導覽列控制與捲動動畫。

-*.jpg: 成員頭像與視覺資產。
