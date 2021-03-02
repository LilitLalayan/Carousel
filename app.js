const images = document.querySelector("#images");
const img = document.querySelectorAll("#images img");
const play = document.querySelector("#play");
const size = img[0].clientWidth;
const photos = document.querySelectorAll("#span div");
let count = 1;
const BUTTON_MODE = {
  initial: "initial",
  playing: "playing",
  paused: "paused",
};
let mode = BUTTON_MODE.initial;

function transition() {
  images.style.transition = "transform 1s ease-in-out";
  images.style.transform = "translateX(" + -size * count + "px)";
}

//for separate buttons
photos[0].addEventListener("click", function () {
  count = 0;
  transition();
});
photos[1].addEventListener("click", function () {
  count = 1;
  transition();
});
photos[2].addEventListener("click", function () {
  count = 2;
  transition();
});
photos[3].addEventListener("click", function () {
  count = 3;
  transition();
});
photos[4].addEventListener("click", function () {
  count = 4;
  transition();
});
photos[5].addEventListener("click", function () {
  count = 5;
  transition();
});
photos[6].addEventListener("click", function () {
  count = 6;
  transition();
});
photos[7].addEventListener("click", function () {
  count = 7;
  transition();
});

//for slideshow button
play.addEventListener("click", controlButton);

function controlButton() {
  if (mode === BUTTON_MODE.initial) {
    autoPlay();
  } else if (mode === BUTTON_MODE.playing) {
    pause();
  } else {
    resumeSlide();
  }
}

let nn;
function autoPlay() {
  play.value = "||";
  mode = BUTTON_MODE.playing;
  nn = setInterval(() => {
    transition();
    count++;
    if (count === img.length) {
      clearInterval(nn);
      play.value = "Slideshow";
      mode = BUTTON_MODE.initial;
      count = 0;
    }
  }, 2000);
}

function pause() {
  clearInterval(nn);
  mode = BUTTON_MODE.paused;
  play.value = "Resume";
}

function resumeSlide() {
  mode = BUTTON_MODE.playing;
  play.value = "||";
  autoPlay();
}

//for next image

function nextImage() {
  transition();
  count++;
  if (count === img.length) {
    count = 0;
  }
}
const next = document
  .querySelector("#next")
  .addEventListener("click", nextImage);

//for prev image
function prevImage() {
  if (count === 0) {
    count = img.length;
  }
  count--;
  transition();
}
const prev = document
  .querySelector("#prev")
  .addEventListener("click", prevImage);
