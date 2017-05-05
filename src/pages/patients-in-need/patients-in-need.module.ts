import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientsInNeed } from './patients-in-need';

@NgModule({
  declarations: [
    PatientsInNeed,
  ],
  imports: [
    IonicPageModule.forChild(PatientsInNeed),
  ],
  exports: [
    PatientsInNeed
  ]
})
export class PatientsInNeedModule {}
