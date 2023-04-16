class Stopwatch2 extends StopWatch {
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
    this.intervalId = setInterval(() => {
      this.time += 5;
      this.render();
    }, 5);
  }

}
