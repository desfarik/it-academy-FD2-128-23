import {Component, ViewChild, ViewChildren, ViewEncapsulation} from '@angular/core';
import {StopwatchComponent} from "./components/stopwatch/stopwatch.component";
import {BoxComponent} from "./components/box/box.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  boxColor = 'black';
  boxType = 'solid';
  timerStarted = false;

  @ViewChild(StopwatchComponent) timer: StopwatchComponent;
  @ViewChildren(BoxComponent) boxes;

  resetTimer() {
    console.log(this.timer);
    this.timer.reset();
  }

  toggleBoxColor() {
    console.log(this.boxes);
    if (this.boxColor === 'black') {
      this.boxColor = 'white';
      this.boxType = 'dashed';
    } else {
      this.boxColor = 'black';
      this.boxType = 'solid';
    }
  }
}
