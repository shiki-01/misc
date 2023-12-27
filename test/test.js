// コンテンツの配列を取得
const contents = document.querySelectorAll(".content");

// 画像の配列を取得
const images = document.querySelectorAll(".image");

// 現在のコンテンツのインデックスを保持する変数
let currentIndex = 0;

// スクロールイベントのリスナーを登録
window.addEventListener("scroll", function () {
    // 現在のコンテンツの高さを取得
    const currentHeight = contents[currentIndex].offsetHeight;

    // 現在のスクロール量を取得
    const scrollTop = document.documentElement.scrollTop;

    // スクロール量がコンテンツの高さを超えたら
    if (scrollTop > currentHeight) {
        // 次のコンテンツがあれば
        if (currentIndex < contents.length - 1) {
            // 現在のコンテンツにtransformプロパティを追加
            contents[currentIndex].style.transition = "transform 1s";
            contents[currentIndex].style.transform = "translateX(-100%)";

            // 現在の画像にz-indexプロパティを追加
            images[currentIndex].style.zIndex = "-1";

            // インデックスを更新
            currentIndex++;

            // スクロール量をリセット
            window.scrollTo(0, 0);
        }
    }
});
