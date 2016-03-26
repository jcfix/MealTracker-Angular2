import { Component } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';

@Component({
  selector: 'my-app',
  directives: [FoodListComponent],
  template:`
    <div class="container">
      <div class="page-wrapper">
        <h1>FOOD LOG</h1>
        <food-list [foodList]="foods"></food-list>
      </div>
    </div>
  `
})

export class AppComponent{
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food('Oatmeal', 'steamed oats with blueberries and honey', 95),
      new Food('Green Smoothie', 'kale, spinach, pineapple, cilantro', 140),
      new Food('Salad', 'asparagus, tomatoes, arugula', 320),
      new Food('Beer', 'white IPA', 170)
    ];
  }
}
