class Time {
    constructor(sec, intervalId) {
        this.sec = 0;
        this.intervalId = intervalId;
    }

    start() {
       return this.intervalId = setInterval(this.showTime, 1000)

    }


    showTime() {
        const timeSec = document.querySelector('.seconds');
        this.sec++;
        timeSec.textContent = this.sec;
    }

    stop() {

    }

    reset() {

    }

    set(time) {

    }

    addTime(time) {

    }

}


