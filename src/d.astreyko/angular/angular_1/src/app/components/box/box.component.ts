import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnChanges {

  @Input() set color(color) {
    console.log(color);
    this._color = color;
  }

  @Input() type = 'solid';

  @Output() onToggle = new EventEmitter();

  _color = 'black';
  value = true;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  toggle() {
    console.log('alert');
    this.value = !this.value;
    this.onToggle.emit()
  }

}
