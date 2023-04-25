class Timer {
    time = 300_000;

  constructor(element) {
    this.element = element;
    this.render();
  }
  get formattedTime() {
    const _seconds = Math.floor(this.time / 1000) ;
    const minutes = Math.floor(_seconds / 60) + '';
    const seconds = _seconds % 60 + '';
    const mseconds = this.time % 1000;
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}.${mseconds}`;
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
        this.time -= 5;
        this.render();
      }, 5);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  reset() {
    this.time = 300_000;
    this.render();
  }
  add(value) {
    this.time += (value * 60 * 1000);
    this.render();
  }
  set(value) {
    this.time = (value * 60 * 1000);
    this.render();
  }
  render() {
    this.element.textContent = this.formattedTime;
  }
}
const timer = new Timer(document.querySelector('.timer'));

