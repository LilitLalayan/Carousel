const images = document.querySelector("#images");
const img = document.querySelectorAll("#images img");
const play = document.querySelector("#play");
const pause = document.querySelector("#stop");
const size = img[0].clientWidth;

//for next image
let count = 1;
function nextImage() {
  images.style.transition = "transform 1s ease-in-out";
  images.style.transform = "translateX(" + -size * count + "px)";
  count++;
  console.log(count);
  if (count === img.length) {
    count = 0;
  }
}
const next = document
  .querySelector("#next")
  .addEventListener("click", nextImage);

//for prev image
function prevImage() {
  count--;
  images.style.transition = "transform 1s ease-in-out";
  images.style.transform = "translateX(" + -size * count + "px)";
  console.log(count);
  if (count === 0) {
    count = img.length;
  }
}
const prev = document
  .querySelector("#prev")
  .addEventListener("click", prevImage);

//for auto-play

let n = 1;
function autoPlay() {
  this.value = "||";
  let nn = setInterval(() => {
    images.style.transition = "transform 1s ease-in-out";
    images.style.transform = "translateX(" + -size * n + "px)";
    n++;
    if (n === img.length) {
      clearInterval(nn);
      this.value = "Slideshow";
      n = 0;
    }
  }, 2000);
}
play.addEventListener("click", autoPlay);
