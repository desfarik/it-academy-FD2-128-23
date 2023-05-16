import {Component} from "@angular/core";

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  value = 0;
  plus() {
    this.value++;
  }

  minus() {
    this.value--;
  }
}
