/* ==========================================================================
   TechFusion Studio - script.js
   專注於前端互動開發的 jQuery 實作
   ========================================================================== */

// 確保 DOM 載入完成後執行
$(document).ready(function() {

    // 變數快取 (Caching elements for performance)
    var $window = $(window);
    var $header = $('.js-header');
    var $navToggle = $('.js-header__toggle');
    var $navMenu = $('.js-header__nav');
    var $scrollLinks = $('.js-scroll-link');

    /* ==========================================================================
       1. Sticky Header - 捲動時固定導覽列並改變外觀
       ========================================================================== */
    function checkScroll() {
        var scrollOffset = $window.scrollTop();
        
        // 只要捲動超過 50px 就加入陰影和背景色
        if (scrollOffset > 50) {
            $header.addClass('header--scrolled');
        } else {
            $header.removeClass('header--scrolled');
        }
    }

    // 頁面載入時先檢查一次 (防止重新整理時已在頁面中間)
    checkScroll();

    // 監聽視窗捲動事件
    $window.on('scroll', function() {
        checkScroll();
    });

    /* ==========================================================================
       2. Mobile Menu Toggle - 手機版漢堡選單開關
       ========================================================================== */
    $navToggle.on('click', function() {
        // 切換導覽選單的顯示/隱藏
        $navMenu.toggleClass('header__nav--open');
        
        // 切換漢堡按鈕本身的樣式 (變成 X)
        $(this).toggleClass('header__toggle--open');
    });

    // 點擊選單連結後，自動關閉手機版選單 (UX 優化)
    $navMenu.find('.header__link').on('click', function() {
        if ($window.width() <= 768) {
            $navMenu.removeClass('header__nav--open');
            $navToggle.removeClass('header__toggle--open');
        }
    });

    /* ==========================================================================
       3. Smooth Scrolling - 錨點滑順捲動
       ========================================================================== */
    $scrollLinks.on('click', function(e) {
        // 阻止連結預設的跳轉行為
        e.preventDefault();

        // 取得目標錨點的 ID (例如 #services)
        var targetID = $(this).attr('href');
        
        // 取得目標元素相對於頁面頂部的距離
        var targetOffset = $(targetID).offset().top;

        // 取得導覽列的高度，以便捲動時不會扣除
        var headerHeight = $header.outerHeight();

        // 執行捲動動畫
        $('html, body').animate({
            scrollTop: targetOffset - headerHeight + 10 // 加上一點緩衝
        }, 800); // 動畫時間 800ms
    });

});