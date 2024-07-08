const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const btnStart = document.getElementById("btn-start");
const btnStop = document.getElementById("btn-stop");
const btnReset = document.getElementById("btn-reset");

let seconds = 0;
let tens = 0;
let interval;

btnStart.onclick = function () {
  interval = setInterval(startTimer, 10);
};

btnStop.onclick = function () {
  clearInterval(interval);
};

btnReset.onclick = function () {
  clearInterval(interval);
  seconds = 0;
  tens = 0;
  appendTens.innerText = 0;
  appendSeconds.innerText = 0;
};

function startTimer() {
  tens++;

  if (tens > 99) {
    seconds++;
    appendSeconds.innerText = seconds;
    tens = 0;
    appendTens.innerText = 0;
  } else {
    appendTens.innerText = tens;
  }
}
