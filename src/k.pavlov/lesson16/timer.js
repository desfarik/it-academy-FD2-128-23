let intervalId;
let sec = 0;
let min = 0;
const fullTime = document.querySelector('.time');

function stop() {
    clearInterval(intervalId);
}

function reset() {
    stop();
    sec = 0;
    fullTime.innerText = '00:00:00';

}

function start() {
    intervalId = setInterval(timer, 1000)

}

function timer() {
    sec++;
    let secs = sec % 60;
    let mins = Math.floor(sec / 60);
    let hrs = Math.floor(sec / 3600);

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    fullTime.textContent = `${hrs}:${mins}:${secs}`;
}

function addMinutes(minutes) {
    sec += minutes * 60;
    const newMinutes = Math.floor(sec / 60);
    const newSeconds = sec % 60;

    if (newSeconds < 10) {
        fullTime.textContent = "0" + newSeconds
    } else {
        newSeconds
    }

    if (newMinutes < 10) {
        fullTime.textContent = "0" + newMinutes;
    } else {
        newMinutes
    }


}