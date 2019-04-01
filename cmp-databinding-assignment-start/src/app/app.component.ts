import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddList: number[] = [];
  evenList: number[] = [];

  onValIncrease(event) {
    if (event % 2 === 0) {
      this.evenList.push(event);
    } else {
      this.oddList.push(event);
    }
  }
}
