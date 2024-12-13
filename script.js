// script.js
let timer;
let elapsedSeconds = 0;
let isRunning = false;

const timeDisplay = document.querySelector('.time-display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimesList = document.getElementById('lap-times');

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedSeconds);
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedSeconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  elapsedSeconds = 0;
  updateDisplay();
  lapTimesList.innerHTML = '';
}

function recordLap() {
  const lapTime = formatTime(elapsedSeconds);
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap: ${lapTime}`;
  lapTimesList.appendChild(lapItem);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

updateDisplay(); // Initialize display
