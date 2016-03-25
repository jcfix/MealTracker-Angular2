import { Component } from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { NewFoodComponent } from './new-food.component';
import { EditFoodComponent } from './edit-food.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  directives: [FoodComponent, NewFoodComponent, EditFoodComponent],
  pipes: [CaloriesPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="form-control" id="dropdown">
      <option value="all" selected="selected">All Foods</option>
      <option value="healthy">Healthy Foods</option>
      <option value="unhealthy">Unhealthy Foods</option>
    </select>
  <div *ngFor="#currentFood of foodList | calories: filterCalories">
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
  public filterCalories: string = 'all';
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
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
}
