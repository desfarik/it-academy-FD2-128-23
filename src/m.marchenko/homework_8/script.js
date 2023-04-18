class Timer {
    time = new Date(0);
    audio = new Audio('golosovanie.mp3');

    constructor(element) {
        this.element = element;
        this.render();
    }

    get formattedTime() {
        const _seconds = Math.floor(this.time / 1000);
        const seconds = _seconds % 60 + '';
        const _minutes = Math.floor(_seconds / 60) + '';
        const minutes = _minutes % 60 + '';
        const hours = Math.floor(_minutes / 60) + '';
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.${this.time % 1000}`;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            if (this.time <= 0) {
                this.time = new Date(0);
                this.render();
                this.progolosovali();
                return;
            }
            this.time.setMilliseconds((this.time.getMilliseconds()) - 51)
            this.render();
            this.golosovanie();
        }, 51);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.progolosovali();
    }

    reset() {
        this.time = new Date(0);
        this.render();
        this.stop();
    }

    set(time) {
        this.stop();
        this.time.setTime(time * 60 * 1000);
        this.render();
    }

    add(time) {
        this.time.setMinutes((this.time.getMinutes()) + time);
        this.render();
    }

    render() {
        this.element.textContent = this.formattedTime;
    }

    golosovanie() {
        const golosovanie = document.querySelector(".golosovanie");
        this.audio.play();
        this.html = `
            <img src='golosovanie.gif'></img>
        `
        golosovanie.innerHTML = this.html;
    }

    progolosovali() {
        const golosovanie = document.querySelector(".golosovanie");
        this.html = ``
        this.audio.pause();
        golosovanie.innerHTML = this.html;
    }
}