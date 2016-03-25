import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component ({
  selector: 'food-display',
  inputs: ['food'],
  template: `
  <div class="foodDisplay">
    <h2>Food Log</h2>
    <h4>{{ food.name }}</h4>
    <h6>{{ food.description }}</h6>
    <h6>Calories: {{ food.calories }}</h6>
  </div>
  `
})

export class FoodComponent {
  public food: Food;
  public foodList: Food[];
}
