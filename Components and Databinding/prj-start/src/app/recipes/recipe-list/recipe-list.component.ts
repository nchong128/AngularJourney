import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is just a test', 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Orange-Juice-Spritzer_EXPS_HCA18_21889_B04_26_4b-696x696.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
