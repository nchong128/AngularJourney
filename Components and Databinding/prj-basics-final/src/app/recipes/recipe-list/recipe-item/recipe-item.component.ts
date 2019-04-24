import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() singleRecipe: Recipe;
  @Output() emitEvent = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked() {
    this.emitEvent.emit();
  }
}
