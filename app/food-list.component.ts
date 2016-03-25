import { Component, EventEmitter } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent],
  template: `
  <food-display *ngFor ="#food of foodList" (click)="foodClicked(food)" [class.selected]="food === selectedFood" [food]="food">
  </food-display>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  constructor() {
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log(clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
}
