let startButton = document.querySelector(".startBtn");
let resetButton = document.querySelector(".resetBtn");
let pauseButton = document.querySelector(".pauseBtn");
let sound = document.querySelector("#sound");
let hours = document.querySelector(".inputHours");
let minutes = document.querySelector(".inputMinutes");
let seconds = document.querySelector(".inputSeconds");
let pHours = document.querySelector(".paragHours");
let pMinutes = document.querySelector(".paragMinutes");
let pSeconds = document.querySelector(".paragSeconds");
let paragContainer = document.querySelector(".paragContainer");
let inputSection = document.querySelector(".inputSection");
let inputContainer = document.querySelector(".inputContainer");

let startTimer = null;
const valuesZero =
  hours.value === 0 && minutes.value === 0 && seconds.value === 0;

function timer() {
  pHours.textContent = hours.value;
  pMinutes.textContent = minutes.value;
  pSeconds.textContent = seconds.value;
  if (valuesZero) {
    clearInterval(startTimer);
  } else if (seconds.value > 0) {
    seconds.value--;
  } else if (minutes.value > 0) {
    seconds.value = 59;
    minutes.value--;
  } else if (hours.value > 0) {
    seconds.value = 59;
    minutes.value = 59;
    hours.value--;
  }
  if (
    hours.value == 0 &&
    minutes.value == 0 &&
    seconds.value > 0 &&
    seconds.value < 10
  ) {
    sound.play();
    pHours.style.color = "red";
    pMinutes.style.color = "red";
    pSeconds.style.color = "red";
  }
}

startButton.addEventListener("click", () => {
  paragContainer.style.display = "flex";
  inputContainer.style.display = "none";
  startTimer = setInterval(function () {
    timer();
  }, 1000);
});

resetButton.addEventListener("click", () => {
  clearInterval(startTimer);
  valuesZero;
  paragContainer.style.display = "none";
  inputContainer.style.display = "block";

  sound.pause();
  sound.currentTime = 0;
  pHours.style.color = "orange";
  pMinutes.style.color = "orange";
  pSeconds.style.color = "orange";
});
pauseButton.addEventListener("click", () => {
  sound.pause();
  clearInterval(startTimer);
});
