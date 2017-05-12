import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DFCFooter } from './dfc-footer';

@NgModule({
  declarations: [
    DFCFooter,
  ],
  imports: [
    IonicPageModule.forChild(DFCFooter),
  ],
  exports: [
    DFCFooter
  ]
})
export class DFCFooterModule {}
