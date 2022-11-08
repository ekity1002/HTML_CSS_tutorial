console.log('hogehoge');
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

  // マスク部分がクリックされたら  open を外して メニューを閉じる
  let mask = document.querySelector('.mask');
  mask.addEventListener('click', function(){
    let header = document.querySelector("header");
    header.classList.remove('open');
  })

  // リンクがクリックされたらメニューを閉じる
  let links = document.querySelectorAll('.menu a');
  for (const link of links) {
    link.addEventListener('click', function(){
      let header = document.querySelector("header");
      header.classList.remove('open');
    })
  }

  // スクロールボタン
  let button = document.querySelector("#to-top");

  function scrollevent() {
    // スクロールしたら表示、非表示
    let button = document.querySelector("#to-top");
    const scroll = window.pageYOffset;
    console.log(button);
    if (scroll < 700) {
      button.style.opacity = 0;
      // クリクしてもリンクに飛ばないように
      button.setAttribute('tabindex', -1);
      button.removeAttribute('href');
    } else {
      button.style.opacity = 1;
      button.style.visibility = 'visible';
      button.setAttribute('href', "#");
    }
  }

  window.addEventListener("scroll", scrollevent);
}
