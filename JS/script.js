
// 1. 定義圖片清單 (請確保檔名與路徑正確)
const images = ["https://github.com/yuanlinwarrior/Web-Lapopo/blob/main/images/lapopo_popog.png?raw=true", "https://github.com/yuanlinwarrior/Web-Lapopo/blob/main/images/lapopo_popom.png?raw=true", "https://github.com/yuanlinwarrior/Web-Lapopo/blob/main/images/lapopo_popoy.png?raw=true"];
let currentIndex = 0; // 目前顯示的圖片索引 (從 0 開始)

// 2. 抓取 HTML 元素
const heroImg = document.getElementById('hero-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// 3. 更新圖片的函式
function updateImage() {
    // 加上一點淡入動畫效果
    heroImg.style.opacity = 0;
    
    setTimeout(() => {
        heroImg.src = images[currentIndex];
        heroImg.style.opacity = 1;
    }, 200); // 0.2秒後切換圖片並恢復透明度
}

// 4. 監聽「下一步」按鈕
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // 如果超過最後一張，回到第一張
    }
    updateImage();
});

// 5. 監聽「上一步」按鈕
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // 如果小於第一張，回到最後一張
    }
    updateImage();
});

/**
 * 切換卡牌的翻轉狀態
 * @param {HTMLElement} card - 被點擊的卡牌元素
 */
function flipCard(card) {
    // toggle 會檢查類別是否存在：有就移除，沒有就加上
    card.classList.toggle('is-flipped');

}// 選取所有的卡片
const allCards = document.querySelectorAll('.card');

allCards.forEach(card => {
    // 功能 A: 當滑鼠「碰觸」到這張牌時，重置所有卡片
    card.addEventListener('mouseenter', () => {
        allCards.forEach(c => {
            // 如果不是目前碰觸的這張，或者全部都重置
            c.classList.remove('is-flipped');
        });
    });
});

/**
 * 功能 B: 點擊翻牌
 * @param {HTMLElement} cardElement - 被點擊的卡牌
 */
function flipCard(cardElement) {
    // 切換翻轉類別
    cardElement.classList.toggle('is-flipped');
}

