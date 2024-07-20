const imgBtn = Array.from(document.querySelectorAll(".img-btn"));
const img = document.querySelector(".img-main");
const mainImgBtns = Array.from(document.querySelectorAll(".img-main__btn"));

const overlayCon = document.querySelector(".overlay-container");
const overlayImg = document.querySelector(".item-overlay__img");
const overlayImgBtn = Array.from(
  document.querySelectorAll(".overlay-img__btn")
);
const overlayBtnImgs = Array.from(
  document.querySelectorAll(".overlay-img__btn-img")
);
const overlayBtns = Array.from(document.querySelectorAll(".overlay-btn"));
let nextImg = 0;
/*  Eventlistener for  image to change when image button is clicked  */
imgBtn.forEach(btn => {
  btn.addEventListener("click", function () {
    img.src = btn.childNodes[1].src;
  });
});


function imgBtns(btns, img, imgName) {
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      if (e.target.classList.contains(`${imgName}__btnlft-img`)) {
        if (nextImg <= 0) nextImg = 3;
        else nextImg--;
        img.src = btn.parentNode.childNodes[7].childNodes[(nextImg*2)+1].childNodes[1].currentSrc;
      }

      if (e.target.classList.contains(`${imgName}__btnrgt-img`)) {
        if (nextImg >= 3) nextImg = 0;
        else nextImg++;
        img.src = btn.parentNode.childNodes[7].childNodes[(nextImg*2)+1].childNodes[1].currentSrc;
      }
      
    });
  });
}

imgBtns(overlayBtns, overlayImg, "item-overlay");
imgBtns(mainImgBtns, img, "img-main");