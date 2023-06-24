let hoursDisplay = document.getElementById("hour-display");
let minutesDisplay = document.getElementById("minute-display");
let secondsDisplay = document.getElementById("second-display");
const resetBtn = document.getElementById("reset-btn");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let hours = 0;
let minutes = 0;
let seconds = 0;

let decrementTime = undefined;

function displayTime(hour = 0, min = 0, sec = 0) {
  hoursDisplay.textContent = String(hour).padStart(2, "0") + ":";
  minutesDisplay.textContent = String(min).padStart(2, "0") + ":";
  secondsDisplay.textContent = String(sec).padStart(2, "0");
}
// As soon as the page is Loaded display initial time
document.addEventListener("DOMContentLoaded", () => {
  displayTime();
});
const form = document.getElementById("time-form");
form.addEventListener("change", (event) => {
  event.preventDefault();

  hours = Number(document.getElementById("hour-input").value); //convert String to Number
  minutes = Number(document.getElementById("minute-input").value);
  seconds = Number(document.getElementById("second-input").value);
  displayTime(hours, minutes, seconds);
  //countdown(hours, minutes, seconds);
  //   form.reset();
});

// Reset button - set timer to 00:00:00
resetBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(decrementTime);
  decrementTime = undefined;
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime();
});
// Start button - set the time to what ever is on
startBtn.addEventListener("click", (event) => {
  if (!decrementTime) {
    // Get the input value
    // Start the countdown
    countdown(hours, minutes, seconds);
    form.reset();
  }
});
// Stop Button
stopBtn.addEventListener("click", (event) => {
  event.preventDefault();
  clearInterval(decrementTime);
  decrementTime = undefined;
});

function countdown(hrs, mins, secs) {
  decrementTime = setInterval(() => {
    secs--;

    if (secs < 0) {
      secs = 59;
      if (mins > 0) {
        mins--;
      } else {
        mins = 59;
        if (hrs > 0) {
          hrs--;
        } else {
          clearInterval(decrementTime);
          displayTime();
          const audio = new Audio(
            "./resources/mixkit-digital-clock-digital-alarm-buzzer-992.wav"
          );
          audio.play();
          setTimeout(() => audio.pause(), 5000);
          timeUps();
          return;
        }
      }
    }
    displayTime(hrs, mins, secs);
    hours = hrs;
    minutes = mins;
    seconds = secs;
  }, 1000);
}

function timeUps() {
  let count = 0;

  let colorChange = setInterval(() => {
    hoursDisplay.classList.toggle("red");
    minutesDisplay.classList.toggle("red");
    secondsDisplay.classList.toggle("red");
    count++;

    if (count === 10) {
      clearInterval(colorChange);
      hoursDisplay.classList.remove("red");
      minutesDisplay.classList.remove("red");
      secondsDisplay.classList.remove("red");
    }
  }, 500);
}
