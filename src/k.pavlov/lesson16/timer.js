let intervalId;
let sec = 0;
let min = 0;

function stop() {
    clearInterval(intervalId);
}

function start() {
     intervalId = setInterval(showMessage, 1000)

}

function showMessage() {
    const timeSec = document.querySelector('.seconds');
    sec++;
    timeSec.textContent = sec;
    const timeMin = document.querySelector('.minutes');

    if (sec >= 60) {
        sec = 0;
        min++;
    }
    timeMin.textContent = min;
}