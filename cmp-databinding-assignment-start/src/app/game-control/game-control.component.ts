import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numEvent = new EventEmitter<number>();
  val: number = 0;
  event;

  constructor() { }

  ngOnInit() {
  }

  startEmit() {
    this.val += 1;
    this.event = setInterval(() => {
      this.numEvent.emit(this.val);
      this.val++;
    }, 1000);
  }

  stopEmit() {
    clearInterval(this.event);
  }


}
