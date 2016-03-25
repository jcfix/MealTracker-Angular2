import { Component, EventEmitter } from 'angular2/core';
import {Food} from './food.model';

@Component ({
  selector: 'edit-food',
  inputs: ['food'],
  outputs: ['onUpdateCaloricIntake'],
  template: `
  <div class="food-form">
    <input [(ngModel)]="food.name" class="form-control"/>
    <input [(ngModel)]="food.description" class="form-control"/>
    <input [(ngModel)]="food.calories" type="number" class="form-control" #newCalories>
    <button (click)="updateCaloricIntake(newCalories)" class="btn btn-info">Update</button>
  </div>
  `
})

export class EditFoodComponent {
  public food: Food;
  public onUpdateCaloricIntake: EventEmitter<number>;
  constructor() {
    this.onUpdateCaloricIntake = new EventEmitter();
  }
  updateCaloricIntake(inputCalories: HTMLInputElement): void {
    var newCal: number = parseInt(inputCalories.value);
    this.onUpdateCaloricIntake.emit(newCal);
  }

}
