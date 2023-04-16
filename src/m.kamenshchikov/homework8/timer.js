const container = document.querySelector(".container");
const timeContainer = document.querySelector(".timer-display");

class Timer {
  time = 0;
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

  render() {
    const ms = (this.time % 1000) + "";
    const _seconds = Math.floor(this.time / 1000);
    const seconds = (_seconds % 60) + "";
    const hours = Math.floor(_seconds / 3600) + "";
    const minutes = (Math.floor(_seconds / 60) % 60) + "";
    this.timer.textContent = `${hours.padStart(2, 0)}:${minutes.padStart(
      2,
      0
    )}:${seconds.padStart(2, 0)}.${ms.padStart(2, 0)}`;
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
    this.time = time * 1000 * 60;
    this.render();
  }

  addTime(minutes) {
    this.time += minutes * 1000 * 60;
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
