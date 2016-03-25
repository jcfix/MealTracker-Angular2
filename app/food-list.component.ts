import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  template: `
  <div *ngFor="#currentFood of foodList">
    <h4 class="foodListItem" (click)="clickFood(currentFood)">
    {{ currentFood.name }}
    </h4>
    <food-display *ngIf="currentFood === selectedFood" [food]="currentFood">
    </food-display>
    <edit-food *ngIf="currentFood === selectedFood" [food] = "currentFood"></edit-food>
  </div>
  <new-food (onSubmitNewFood)="addFood($event)"></new-food>
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
  addFood(newFoodArr: Array<any>): void {
    this.foodList.push(
      new Food(newFoodArr[0], newFoodArr[1], newFoodArr[2])
    );
  }
}
