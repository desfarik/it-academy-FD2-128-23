class StopWatch {

  prevTime;

  constructor(element, id) {
    this.element = element;
    this.id = id;
    const data = JSON.parse(localStorage.getItem(this.stopWatchKey));
    this.laps = data.laps || [];
    this.time = data.time || 0;
    if (data.running) {
      this.start();
    }
    this.render();
  }

  get stopWatchKey() {
    return `stop-watch-${this.id}`;
  }

  get data() {
    return JSON.stringify({
      time: this.time,
      running: this.isRunning,
      laps: this.laps,
    });
  }

  get isRunning() {
    return !!this.intervalId;
  }

  start() {
    if (this.isRunning) {
      return;
    }
    this.prevTime = new Date();
    this.intervalId = setInterval(() => {
      this.time += new Date() - this.prevTime;
      this.prevTime = new Date();
      this.render();
      localStorage.setItem(this.stopWatchKey, this.data);
    }, 5);
    localStorage.setItem(this.stopWatchKey, this.data);
  }

  makeLap() {
    this.laps.push(this.time);
    this.render();
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    localStorage.setItem(this.stopWatchKey, this.data);
  }

  render() {
    this.element.innerHTML =
      `<div class="current-time">${this.formattedTime}</div>
<div class="laps-container">
${this.laps.map((time,index)=>{
  let lapTime = time - (this.laps[index -1]||0)
  return `<div>
<span>${index+1}</span>
<span>${this.formatTime(lapTime)}</span>
<span>${this.formatTime(time)}</span>

</div>`
      }).join('')}
</div>`
  }
formatTime(time){
  return moment(new Date(time))
    .format('mm:ss:SS');
}

  get formattedTime() {
    return this.formatTime(this.time)
  }
}
