const body = document.querySelector('body');
const time = document.getElementById('time');
const displayStopWatch = document.getElementById('stopwatch');
const timer = document.getElementById('timer');

const date = new Date();
const currentTime = date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();

//section 1: display current time
time.innerHTML = currentTime;

//stopwatch variables
let seconds = 0;
let minutes = 0;
let hours = 0;

//define variables for leading 0
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//define interval()
let interval = null;

//define var to hold stopwatch status
let status = "stopped";

// stopwatch function, increment seconds
function stopwatch(){
  seconds++;

  //determine when to increment minutes
  if(seconds / 60 === 1){
      seconds = 0;
      minutes++;
// determine when to increment hours
      if(minutes / 60 === 1 ){
          minutes = 0;
          hours++;
                }
  }

  //if seconds/minutes/hours are only 1 digit, add leading 0
  if(seconds < 10) {
      displaySeconds = "0" + seconds.toString();

  }
  else {
      displaySeconds = seconds;
  }
  if(minutes < 10){
      displayMinutes = "0" + minutes.toString();
      
  }
  else {
      displayMinutes = minutes;
  }
  if(hours < 10){
      displayHours = "0" + hours.toString();
  }
  else {
      displayHours = hours;
  }
  //display updated time values to user, with leading 0
  document.getElementById("stopwatch").innerHTML = displayHours + ':' + displayMinutes + ':'+ displaySeconds;
}

//start stop button
function startStop() {
    if(status === "stopped") {
        //start stopwatch
        interval = window.setInterval(stopwatch, 1000);
        document.getElementById("start").innerHTML = "Start/Stop";
        status = "started";
    }
    else {
        window.clearInterval(interval);
        document.getElementById("start").innerHTML = "Start/Stop";
        status = "stopped";
    }
}

//timer

const numberTimer = document.getElementById('numberTimer');
const timerDisplay = document.getElementById('timerDisplay');
const buttonTimer = document.getElementById('buttonTimer');

let timerInterval = 0;

function startTimer() {
  let newTimer = Number(numberTimer.value);
  if (newTimer !== 0) {
    timerInterval = setInterval(function () {
      newTimer = newTimer - 0.01;
      displayTimerValue = newTimer.toFixed(2);

      document.getElementById('timerDisplay').innerText = displayTimerValue;
      if (displayTimerValue == 0) {
        document.getElementById('timerDisplay').innerText = "00.00";
        clearInterval(timerInterval);
        alert("Timer's up!");
      }
    }, 10);
  }
}

document.getElementById("buttonTimer").addEventListener("click", startTimer);


