import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Poverty } from './poverty';

@NgModule({
  declarations: [
    Poverty,
  ],
  imports: [
    IonicPageModule.forChild(Poverty),
  ],
  exports: [
    Poverty
  ]
})
export class PovertyModule {}
