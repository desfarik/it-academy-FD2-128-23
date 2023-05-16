import {Component, Input} from "@angular/core";

@Component({
  selector: 'stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  time = 0;
  interval;

  @Input() set started(started) {
    if(started) {
      this.start();
    } else {
      this.stop();
    }
  }

  start() {
    this.interval = setInterval(
      () => {
        this.time = this.time + 50
      }
    ,50)
  }

  stop() {
    clearInterval(this.interval)
  }

  reset(){
    this.time = 0;
  }

  get formattedTime() {
    const _seconds = this.time;
    const minutes = Math.floor(_seconds / 60) + '';
    const seconds = _seconds % 60 + '';
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
}
