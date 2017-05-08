import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthCare } from './health-care';

@NgModule({
  declarations: [
    HealthCare,
  ],
  imports: [
    IonicPageModule.forChild(HealthCare),
  ],
  exports: [
    HealthCare
  ]
})
export class HealthCareModule {}
