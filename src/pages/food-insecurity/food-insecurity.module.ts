import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodInsecurity } from './food-insecurity';

@NgModule({
  declarations: [
    FoodInsecurity,
  ],
  imports: [
    IonicPageModule.forChild(FoodInsecurity),
  ],
  exports: [
    FoodInsecurity
  ]
})
export class FoodInsecurityModule {}
