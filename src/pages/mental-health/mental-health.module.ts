import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentalHealth } from './mental-health';

@NgModule({
  declarations: [
    MentalHealth,
  ],
  imports: [
    IonicPageModule.forChild(MentalHealth),
  ],
  exports: [
    MentalHealth
  ]
})
export class MentalHealthModule {}
