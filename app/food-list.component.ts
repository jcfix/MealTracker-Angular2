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
  <h4>Calorie Count: {{calorieCount}} | Average Calorie Count: {{averageCaloriesString}}</h4>
  <select (change)="onChange($event.target.value)" class="form-control" id="dropdown">
      <option value="all" selected="selected">All Foods</option>
      <option value="healthy">Healthy Foods</option>
      <option value="unhealthy">Unhealthy Foods</option>
    </select>
  <div class="row">
    <div class="foodItemList col-md-4" *ngFor="#currentFood of foodList | calories: filterCalories">
      <h4 id="foodItem" (click)="clickFood(currentFood)">
      {{ currentFood.name }}
      </h4>
      <food-display *ngIf="currentFood === selectedFood" [food]="currentFood">
      </food-display>
      <edit-food *ngIf="currentFood === selectedFood" [food] = "currentFood" (onUpdateCaloricIntake)="updateCalCounter($event)"></edit-food>
    </div>
  </div>
  <new-food (onSubmitNewFood)="addFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public selectedFood: Food;
  public filterCalories: string = 'all';
  public calorieCount: number = 0;
  public averageCalories: number = 0;
  public averageCaloriesString: string;
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
    this.calorieCount += newFoodArr[2];
    this.averageCalories = (this.calorieCount / (this.foodList.length));
    this.averageCaloriesString = (Math.round((this.averageCalories)*100)/100).toFixed(1);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }
  updateCalCounter(newCal: number): void {
    this.calorieCount = 0;
    for(var i = 0; i < this.foodList.length; i++) {
      if(this.foodList[i].name === "selectedFood") {
        this.foodList[i].calories = newCal;
      }
      this.calorieCount += (this.foodList[i].calories);
      this.averageCalories = (this.calorieCount / (this.foodList.length));
      this.averageCaloriesString = (Math.round((this.averageCalories)*100)/100).toFixed(1)
    }
  }
}
