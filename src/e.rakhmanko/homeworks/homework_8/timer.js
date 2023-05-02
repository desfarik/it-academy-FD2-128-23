class Timer {
  time = 0;
  constructor(element) {
    this.element = element;
    this.render();
  }
  render() {
    const _seconds = Math.floor(this.time / 1000);
    const milliSeconds = (this.time % 1000) + "";
    const seconds = (_seconds % 60) + "";
    const minutes = (Math.floor(_seconds / 60) % 60) + "";
    const hours = Math.floor(_seconds / 3600) + "";
    this.element.textContent = `${hours.padStart(2, 0)}:${minutes.padStart(
      2,
      0
    )}:${seconds.padStart(2, 0)}.${milliSeconds.padStart(2, 0)}`;
  }
  start() {
    if (this.intervalId) {
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
    }, 5);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  reset() {
    this.time = 0;
    this.stop();
    this.render();
  }
  set(time) {
    this.previousTime = Date.now();
    this.time = time * 1000 * 60;
    this.render();
  }
  addTime(time) {
    this.previousTime = Date.now();
    this.time += time * 1000 * 60;
    this.render();
  }
}
const elementTimer = document.querySelector(".timer");
const timer = new Timer(elementTimer);
