class Stopwatch3 extends StopWatch {
  time = 0;

  constructor(element) {
    super(element);
  }

  get formattedTime() {
    const _seconds = Math.floor(this.time / 1000) ;
    const minutes = Math.floor(_seconds / 60) + '';
    const seconds = _seconds % 60 + '';
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}:${this.time % 1000}`;
  }

  start() {
    // уже запущен
    if (this.intervalId) {
      return;
    }
    this.prevTime = Date.now();
    this.intervalId = setInterval(() => {
      this.time += Date.now() - this.prevTime;
      this.prevTime = Date.now();
      this.render();
    }, 5);
  }

  reset() {
    this.prevTime = Date.now();
    super.reset();
  }

}
