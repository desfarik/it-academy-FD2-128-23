class Timer {
    constructor() {
        this.time = 60;
        this.chosenTime = 0;
        this.pausedTime = 0;
        this.timerInterval = null;
        this.pauseStart = null;
        this.startTime = null;
        this.isRunning = false;
        this.hoursDisplay = document.querySelector('.hours');
        this.minutesDisplay = document.querySelector('.minutes');
        this.secondsDisplay = document.querySelector('.seconds');
        this.millisecondsDisplay = document.querySelector('.milliseconds');
        this.startBtn = document.querySelector('#startBtn');
        this.startBtn.addEventListener('click', () => {
            if (this.isRunning) {
                this.startBtn.classList.remove('pause');
                this.startBtn.classList.add('start');
                this.start();
            } else {
                this.startBtn.classList.remove('start');
                this.startBtn.classList.add('pause');
                this.pause();
            }
        });

    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = this.pauseStart ? Date.now() - this.pausedTime : Date.now();
            this.timerInterval = setInterval(() => {
                const currentTime = Date.now();
                const elapsedTime = currentTime - this.startTime;
                const remainingTime = this.time * 1000 - elapsedTime;
                if (remainingTime < 0) {
                    this.stop();
                    this.displayTime(0);
                } else {
                    this.displayTime(remainingTime);
                }
            }, 20);
            this.pausedTime = 0;
            this.pauseStart = null;
        }
    }

    pause() {
        if (this.isRunning) {
            this.pausedTime = Date.now() - this.startTime;
            this.pauseStart = this.startTime;
            this.isRunning = false;
            clearInterval(this.timerInterval);
        }
    }
    setChosenTime(time) {
        this.chosenTime = parseInt(time);
    }
    stop() {
        if (this.isRunning) {
            this.isRunning = false;
            clearInterval(this.timerInterval);
            this.displayTime(this.time * 1000);
            this.startBtn.classList.add('pause');
            this.startBtn.classList.remove('start');
        } else {
            clearInterval(this.timerInterval);
            this.displayTime(this.time * 1000);
            this.startBtn.classList.add('pause');
            this.startBtn.classList.remove('start');
        }
    }

    reset() {
        this.stop();
        this.time = 0;
        this.displayTime(this.time * 1000);
    }

    set(time) {
        this.stop();
        this.time = parseInt(time);
        this.displayTime(this.time * 1000);
    }

    addTime(time) {
        this.time += Math.round(time);
        this.displayTime(this.time * 1000);
    }

    displayTime(time) {
        const hours = Math.floor(time / (3600 * 1000));
        const minutes = Math.floor(time / (60 * 1000)) % 60;
        const seconds = Math.floor(time / 1000) % 60;
        const milliseconds = Math.floor((time % 1000) / 10);
        this.hoursDisplay.innerText = hours.toString().padStart(2, '0');
        this.minutesDisplay.innerText = minutes.toString().padStart(2, '0');
        this.secondsDisplay.innerText = seconds.toString().padStart(2, '0');
        this.millisecondsDisplay.innerText = milliseconds.toString().padStart(2, '0');
    }
}

const timer = new Timer();
timer.displayTime(timer.time * 1000);