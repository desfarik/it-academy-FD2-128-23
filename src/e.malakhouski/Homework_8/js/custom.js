const container = document.querySelector(".main");
const timeContainer = document.querySelector(".time");

class Timer {
  intervalId;
  time = 5 * 60 * 1000;
  constructor(container, timer) {
    this.container = container;
    this.timer = timer;
    container.onclick = this.onClick.bind(this);
    this.render();
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.prevTime = Date.now();
    this.intervalId = setInterval(() => {
      this.time -= Date.now() - this.prevTime;
      this.prevTime = Date.now();
      this.render();
      if (this.time <= 0) {
        this._timeEnded();
        return;
      }
    }, 10);
  }

  _timeEnded() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.time = 0;
    this.render();
  }

  render() {
    this.timer.textContent = this.formattedTime;
  }

  get formattedTime() {
    const ms = (this.time % 1000) + "";
    const _seconds = Math.floor(this.time / 1000) + "";
    const _minutes = Math.floor(_seconds / 60) + "";
    const seconds = (_seconds % 60) + "";
    const hours = Math.floor(_minutes / 60) + "";
    const minutes = (_minutes % 60) + "";
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}.${ms.slice(0, 2)}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.time = 5 * 60 * 1000;
    this.render();
  }

  set(time) {
    this.time = time * 60 * 1000;
    this.render();
  }

  addTime(minutes) {
    this.time += minutes * 60 * 1000;
    this.render();
  }

  onClick(event) {
    if (!event.target.classList.contains("btn")) {
      return;
    }
    let button = event.target.closest(".btn");
    let timeSet = button.dataset.time_set;
    let timeAdd = button.dataset.time_add;
    let action = button.dataset.action;
    if (action) {
      if (action === "set") {
        this[action](timeSet);
        return;
      }
      if (action === "addTime") {
        this[action](timeAdd);
        return;
      }
      this[action]();
    }
  }
}

new Timer(container, timeContainer);
