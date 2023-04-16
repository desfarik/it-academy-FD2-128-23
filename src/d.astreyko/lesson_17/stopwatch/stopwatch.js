class StopWatch {
  time = 0;

  constructor(element) {
    this.element = element;
    this.render();
  }

  get formattedTime() {
    const _seconds = this.time;
    const minutes = Math.floor(_seconds / 60) + '';
    const seconds = _seconds % 60 + '';
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
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
}
