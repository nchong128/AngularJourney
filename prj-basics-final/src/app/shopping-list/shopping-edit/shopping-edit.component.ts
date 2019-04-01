import {Component, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;
  ingredient: Ingredient;
  @Output() sendIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  submitRecipes() {
    const newIngredient = new Ingredient(
      this.name.nativeElement.value,
      this.amount.nativeElement.value
    );

    this.sendIngredient.emit(newIngredient);

  }
}
