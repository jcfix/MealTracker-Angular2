import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
    <div class="container">
      <h3>FOOD LOG</h3>
      <food-list [foodList]="foods" (onFoodSelect)="foodWasSelected($event)"></food-list>
    </div>
  `
})

export class AppComponent{
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food(['Oatmeal', 'steamed oats with blueberries and honey', 95]),
      new Food(['Panino', 'eggplant, roasted red pepper, and feta on focaccia', 298]),
      new Food(['Salad', 'asparagus, tomatoes, cucumbers, arugula and goat cheese', 320]),
      new Food(['Beer', 'payette tatanka blanca white IPA', 150])
    ];
  }
  foodWasSelected(clickedFood: Food): void {

  }
}
