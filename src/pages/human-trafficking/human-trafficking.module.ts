import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HumanTrafficking } from './human-trafficking';

@NgModule({
  declarations: [
    HumanTrafficking,
  ],
  imports: [
    IonicPageModule.forChild(HumanTrafficking),
  ],
  exports: [
    HumanTrafficking
  ]
})
export class HumanTraffickingModule {}
