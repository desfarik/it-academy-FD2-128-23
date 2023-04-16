const timerContainer =  document.querySelector(".timer-continer");
const countdownTimer = document.querySelector(".time");

class Timer {
    time = 60_000;
    constructor(element) {
        this.element = element;
        this.render();
    }
    get formattedTime() {
        const milliseconds = (this.time % 1000) + "";
        const _seconds = Math.floor(this.time / 1000) + "";
        const _minutes = Math.floor(_seconds / 60) + "";
        const seconds = (_seconds % 60) + "";
        const hours = Math.floor(_minutes / 60) + "";
        const minutes = (_minutes % 60) + "";
        return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}.${milliseconds.padStart(3, "0")}`;
    }
    start() {
        if(this.intervalId) {
            return;
        }
        this.previousTime = Date.now();
        this.intervalId = setInterval(() => {
        if (this.time <= 0) {
        this.stop();
        return;
    }
      this.time -= Date.now() - this.previousTime;
      this.render();
      this.previousTime = Date.now();
    }, 100);
    }
    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    reset() {
        this.time = 60_000;
        this.render();
    }

    render() {
        this.element.textContent = this.formattedTime;
    }
    addTime(time) {
        this.previousTime = Date.now();
        this.time += time * 1000 * 60;
        this.render();
    }
    setTime(time) {
        this.previousTime = Date.now();
        this.time = time * 1000 * 60;
        this.render();
    }
}
const timer = new Timer(countdownTimer);