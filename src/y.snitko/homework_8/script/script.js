class Timer {
  constructor() {
    this.intervalId;
    this.time = 0;
    this.milliseconds = 0;
    this.startTime = document.querySelector('.btn-start');
    this.stopTime = document.querySelector('.btn-stop');
    this.resetTime = document.querySelector('.btn-reset');
    this.btnContainer = document.querySelector('.btn-block');
    this.addTimer = document.querySelector('.timer');
    this.setTime = document.querySelector('.set-time');
    this.addTime = document.querySelector('.add-time');
    this.onClickBtn = this.onClickBtn.bind(this);
    this.setTimeValue = this.setTimeValue.bind(this);
    this.addTimeValue = this.addTimeValue.bind(this);
    this.start();
    this.timer();
    this.stop();
    this.reset();
  }

  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      if (this.milliseconds === 0 && this.time === 0) {
        clearInterval(this.intervalId);
        return;
      }
      if (this.milliseconds === 0) {
        this.time--;
        this.milliseconds = 1000;
      }
      this.milliseconds -= 50;
      this.timer();
    }, 50);
  }

  timer() {
    const hours = Math.floor(this.time / 3600)
      .toString()
      .padStart(2, '0');
    const minutes = Math.floor((this.time / 60) % 60)
      .toString()
      .padStart(2, '0');
    const seconds = Math.floor(this.time % 60)
      .toString()
      .padStart(2, '0');
    const mili = this.milliseconds.toString().padStart(2, '0').slice(0, 2);
    this.addTimer.textContent = `${hours}:${minutes}:${seconds}.${mili}`;
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
  }

  reset() {
    clearInterval(this.intervalId);
    this.time = 0;
    this.milliseconds = 0;
    this.addTimer.textContent = '00:00:00.00';
    this.intervalId = 0;
  }

  onClickBtn(event) {
    let target = event.target;
    if (target.tagName !== 'BUTTON') {
      return;
    }

    if (target === this.startTime) {
      this.start();
    }

    if (target === this.stopTime) {
      this.stop();
    }

    if (target === this.resetTime) {
      this.reset();
    }
  }

  setTimeValue(event) {
    let target = event.target;
    if (target.tagName !== 'LI') {
      return;
    }
    let timeValue = +target.dataset.time;
    let setMinutes = (timeValue / 60).toString().padStart(2, '0');
    this.reset();
    this.time = timeValue;
    this.addTimer.textContent = `00:${setMinutes}:00.00`;
  }

  addTimeValue(event) {
    let target = event.target;
    if (target.tagName !== 'LI') {
      return;
    }
    let timeValue = +target.dataset.time;
    this.stop();
    this.time += timeValue;
    this.timer();
  }

  init() {
    this.setTime.addEventListener('click', this.setTimeValue);
    this.addTime.addEventListener('click', this.addTimeValue);
    this.btnContainer.addEventListener('click', this.onClickBtn);
  }
}

const timer = new Timer();
timer.init();
