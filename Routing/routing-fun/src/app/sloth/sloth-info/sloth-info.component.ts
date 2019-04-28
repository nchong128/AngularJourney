import { Component, OnInit } from '@angular/core';
import {SlothsService} from "../sloths.service";
import {ActivatedRoute, Route} from "@angular/router";

@Component({
  selector: 'app-sloth-info',
  templateUrl: './sloth-info.component.html',
  styleUrls: ['./sloth-info.component.css']
})
export class SlothInfoComponent implements OnInit {
  sloth: {
    title : string,
    description : string
  };

  constructor(private slothsService : SlothsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let slothType = this.route.snapshot.queryParams['type'];
    this.sloth = this.slothsService.getSloths(slothType);

    // Subscribe to change in params
    this.route.queryParams
      .subscribe(
        (newParams) => {
          let slothType = newParams['type'];
          this.sloth = this.slothsService.getSloths(slothType);
      });
  }

}
