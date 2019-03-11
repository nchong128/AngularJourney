import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  username: string = '';
  isEmpty: boolean = true;

  constructor() {

   }

  ngOnInit() {

  }

  checkEmpty(event) {
    if ((<HTMLInputElement>event.target).value.length != 0) {
      this.isEmpty = false;
    } else {
      this.isEmpty = true;
    }
  }

  resetInput() {
    this.username = '';
    this.isEmpty = true;
  }



}
