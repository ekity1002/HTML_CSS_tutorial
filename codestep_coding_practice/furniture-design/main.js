console.log("testing");

window.onload = function() {

  function buttonClick() {
    console.log('clicked!!!!');
    let header = document.querySelector("header");

    if (header.classList.contains('open')) {
      console.log(`remove open: ${header}`);
      header.classList.remove('open');
    }
    else {
      console.log(`add open: ${header}`);
      header.classList.add('open');
    }
  }

  let button = document.querySelector(".toggle_btn");
  console.log(button);
  button.addEventListener("click", buttonClick);
}

