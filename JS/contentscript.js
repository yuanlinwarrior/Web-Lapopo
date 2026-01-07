let currentIndex = 0;
const slides = document.querySelectorAll('.slide-content');
const navButtons = document.querySelectorAll('.nav-btn');

function updateDisplay(index) {
    // 1. 處理索引循環 (1-6 循環)
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;

    // 2. 更新內容顯示
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });

    // 3. 更新導覽列顏色
    navButtons.forEach((btn, i) => {
        btn.classList.toggle('active', i === currentIndex);
    });
}

// 跳轉到特定頁面
function goToPage(pageNumber) {
    updateDisplay(pageNumber - 1);
}

// 左右切換
function changePage(direction) {
    updateDisplay(currentIndex + direction);
}

// 核心：初始檢查 URL 參數
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page'); // 抓取 ?page=3 裡的 3
    
    if (page) {
        updateDisplay(parseInt(page) - 1);
    } else {
        updateDisplay(0); // 預設顯示第一頁
    }
};