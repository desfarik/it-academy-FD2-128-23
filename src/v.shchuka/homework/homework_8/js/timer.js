class Timer {
  time = 0;
  constructor(element, container) {
    this.element = element;
    this.container = container;
    this.render();
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.previousTime = Date.now();
    this.showActiveStop();
    this.getIntervalId();
  }
  showActiveStop() {
    if (this.time !== 0) {
      this.container.classList.add("stop-active");
      this.container.classList.remove("play-active");
    }
  }
  getIntervalId() {
    this.intervalId = setInterval(() => {
      if (this.time <= 0) {
        this.stop();
        this.container.classList.remove("play-active");
        return;
      }
      this.time -= Date.now() - this.previousTime;
      this.render();
      this.previousTime = Date.now();
    }, 5);
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
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.container.classList.remove("stop-active");
    this.container.classList.add("play-active");
  }
  reset() {
    this.time = 0;
    this.stop();
    this.container.classList.remove("play-active");
    this.render();
  }
  set(time) {
    this.container.classList.add("play-active");
    this.previousTime = Date.now();
    this.time = time * 1000 * 60;
    this.render();
  }
  addTime(time) {
    this.container.classList.add("play-active");
    this.previousTime = Date.now();
    this.time += time * 1000 * 60;
    this.render();
  }
  onClick(event) {
    const target = event.target;
    if (target.tagName !== "BUTTON") {
      return;
    } else if (target.hasAttribute("data-add-time")) {
      this.addTime(target.dataset.addTime);
    } else if (target.hasAttribute("data-set")) {
      this.set(target.dataset.set);
    } else if (target.classList.contains("control-button")) {
      this.control(target);
    }
  }
  control(target) {
    if (target.classList.contains("button-play")) {
      this.start();
    } else if (target.classList.contains("button-stop")) {
      this.stop();
    } else if (target.classList.contains("button-reset")) {
      this.reset();
    }
  }
}
const elementTimer = document.querySelector(".timer");
const timerContainer = document.querySelector(".timer-container");
const timer = new Timer(elementTimer, timerContainer);
timerContainer.addEventListener("click", () => timer.onClick(event));
