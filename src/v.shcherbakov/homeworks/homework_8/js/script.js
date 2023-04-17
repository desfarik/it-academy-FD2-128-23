class Timer {
    time = 0;

    constructor(element) {
        this.element = element;
        this.render();
    }

    get formattedTime() {
        const _seconds = Math.floor(this.time / 1000);
        const milliSeconds = (this.time % 1000) + "";
        const seconds = _seconds % 60 + '';
        const _minutes = Math.floor(_seconds / 60) + '';
        const minutes = _minutes % 60 + '';
        const hours = Math.floor(_minutes / 60) + '';
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2,
            '0')}.${milliSeconds.padStart(2, '0')}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.prevTime = Date.now();
        this.intervalId = setInterval(() => {
            if (this.time <= 0) {
                this.time = new Date(0);
                this.stop();
                return;
            }
            this.time -= Date.now() - this.prevTime;
            this.render();
            this.prevTime = Date.now();
        }, 5);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.time = new Date(0);
        this.render();
        this.stop();
    }

    set(time) {
        this.stop();
        this.prevTime = Date.now(0);
        this.time = time * 1000 * 60;
        this.render();
    }

    add(time) {

        this.prevTime = Date.now();
        this.time += time * 1000 * 60;
        this.render();
    }

    render() {
        this.element.textContent = this.formattedTime;
    }

}

