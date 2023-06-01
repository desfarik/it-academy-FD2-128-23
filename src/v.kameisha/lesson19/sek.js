let time = 0;
let intervalId;
const timerElement = document.querySelector('.timer');


function transformTime(miliseconds) {
  const _seconds = Math.floor(miliseconds / 1000);
  const minutes = Math.floor(_seconds / 60) + '';
  const seconds = _seconds % 60 + '';
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
}

function start() {
  if (intervalId) {
    return;
  }
  intervalId = setInterval(() => {
    time += 50;
    timerElement.textContent = transformTime(time);
  }, 30);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  time = 0;
  timerElement.textContent = transformTime(time);
}
reset();