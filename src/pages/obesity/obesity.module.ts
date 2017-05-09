import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Obesity } from './obesity';

@NgModule({
  declarations: [
    Obesity,
  ],
  imports: [
    IonicPageModule.forChild(Obesity),
  ],
  exports: [
    Obesity
  ]
})
export class ObesityModule {}
