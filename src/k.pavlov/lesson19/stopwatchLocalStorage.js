class Time {
    time = 0;

    constructor(element) {
        this.element = element;
        this.render();
    }

    get formattedTime() {
        const _seconds = this.time;
        const minutes = Math.floor((_seconds / 60) % 60) + '';
        const hours = Math.floor(_seconds / 3600) + '';
        const seconds = _seconds % 60 + '';
        if (minutes < 0 && seconds < 0) {
            reset()
        }
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;

        localStorage.setItem()
    }

    start() {
        // уже запущен
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.time++;
            this.render();
        }, 1000);

    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    reset() {
        this.time = 0;
        this.render();
    }

    render() {
        this.element.textContent = this.formattedTime;
    }

    addTime(minutes) {
        this.time += minutes * 60;
        const newMinutes = Math.floor(this.time / 60);
        const newSeconds = this.time % 60;
        if (newMinutes < 10 && newSeconds < 10) {
            return "0" + newMinutes + "0" + newSeconds
        } else {
            return newMinutes + newSeconds
        }
    }

    setTime(minutes) {
        this.time = minutes * 60;
        this.render()
    }
}

const Local_Key = 'local';




