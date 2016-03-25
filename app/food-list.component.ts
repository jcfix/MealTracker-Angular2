import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
// import { NewFoodComponent } from './add-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent],
  template: `
  <div *ngFor="#currentFood of foodList">
    <h4 class="foodListItem" (click)="clickFood(currentFood)">
    {{ currentFood.name }}
    </h4>
    <food-display *ngIf="currentFood === selectedFood" [food]="currentFood">
    </food-display>
  </div>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  constructor() {}
  clickFood(clickedFood: Food): void {
    if(this.selectedFood === clickedFood) {
      this.selectedFood = undefined;
    } else {
      this.selectedFood = clickedFood;
    }
  }
}
