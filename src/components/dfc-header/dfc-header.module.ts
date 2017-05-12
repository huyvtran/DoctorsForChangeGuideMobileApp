import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DFCHeader } from './dfc-header';

@NgModule({
  declarations: [
    DFCHeader,
  ],
  imports: [
    IonicPageModule.forChild(DFCHeader),
  ],
  exports: [
    DFCHeader
  ]
})
export class DFCHeaderModule {}
