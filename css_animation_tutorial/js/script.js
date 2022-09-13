function fadeAnime() {
  //動きの設定
  $('.fadeInTrigger').each(function () {
    let elemPos = $(this).offset().top-50; //要素より50pxの
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    console.log(`${elemPos} ${scroll} ${windowHeight}`)

    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeIn'); //画面内に入ったらfadeInというクラス名を追記
    }
    else {
      $(this).removeClass('fadeIn') //画面外に出たらfadeInというクラスを外す
    }
  });
}

// 画面をスクロールした場合に動く場合の記述
$(window).scroll(function() {
  console.log('on scroll');
  fadeAnime(); //アニメーション関数を呼ぶ
});

// 画面が読み込まれたらすぐに動く場合の記述
$(window).on('load', function(){
  console.log('on load');
  fadeAnime();
})