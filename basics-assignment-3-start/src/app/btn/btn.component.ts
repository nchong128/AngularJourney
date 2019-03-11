import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {
  textDisplayed: boolean = true;
  btnStats = [];
  
  buttonClicked(event) {
    this.textDisplayed = !this.textDisplayed;
    
    if (this.btnStats.length == 0) {
      this.btnStats.push(1);
    } else {
      this.btnStats.push(this.btnStats[this.btnStats.length - 1] + 1);
    }
  }

  constructor() { }

  ngOnInit() {
  }
  

}
