console.log("hello!");

// ハンバーガーメニュー
window.onload = function() {
  //ハンバーガー
  let hm  = document.querySelector('.hamburger');
  hm.addEventListener('click', function() {
    console.log('hamburger clicked!!!!');
    let header = document.querySelector("header");

    if (header.classList.contains('open')) {
      console.log(`remove open: ${header}`);
      header.classList.remove('open');
    }
    else {
      console.log(`add open: ${header}`);
      header.classList.add('open');
    }
  })

  // カルーセル設定
  // 参考：https://www.bring-flower.com/blog/slider/#index-07
  const mySwiper = new Swiper ('.swiper', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: '2', //何枚表示するか
    speed: 2000, // スライドアニメーションのスピード（ミリ秒）
    centeredSlides : true,
    // autoplay: { //自動再生する
    //   delay: 2500, //次のスライドに切り替わるまでの時間
    //     disableOnInteraction: false, //ユーザーが操作したら止めるか
    //     waitForTransition: false, // アニメーションの間にスライドを止めるか
    // },
    // //ページネーション表示の設定
    // pagination: {
    //   el: '.swiper-pagination', //ページネーション要素のクラス名
    //   clickable: true, //クリック可能にするか
    //   type: 'bullets', //ページネーションの種類
    // },

    // //ナビゲーションボタン（矢印）表示の設定
    // navigation: {
    //   nextEl: '.swiper-button-next', //「次へボタン」要素のクラス名
    //   prevEl: '.swiper-button-prev', //「前へボタン」要素のクラス名
    // },
  });
}