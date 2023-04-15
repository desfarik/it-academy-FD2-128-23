class StopWatch {
  min = 60_000;
  time = this.min * 5;

  constructor(element) {
    this.element = element;
    this.render();
  }

  get formattedTime() {
    const _seconds = Math.floor(this.time / 1000);
  const _minutes = Math.floor(_seconds / 60);
  const hours = Math.floor(_minutes / 60) + "";
    const minutes = (_minutes % 60) + "";
    const seconds = (_seconds % 60) + "";
  const miliSeconds = (this.time % 1000) + "";
    return `${hours.padStart(2, "0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2, "0")}.${miliSeconds.padStart(3, "0")}`;
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.prevTime = Date.now();
    this.intervalId = setInterval(() => {
      this.time -= Date.now() - this.prevTime;
      this.prevTime = Date.now();
    if (this.time <= 0) {
      this.time = 0;
      this.stop();
    }
      this.render();
    }, 5);
  }

stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.prevTime = Date.now();
  this.time = this.min * 5;
    this.render();
  }

  addTime(minutes) {
    this.time += minutes * this.min;
    this.render();
  }

  setTime(minutes) {
    this.time = minutes * this.min;
    this.render();
  }

  render() {
    this.element.textContent = this.formattedTime;
  }
}
