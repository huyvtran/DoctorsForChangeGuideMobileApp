import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsAndCond } from './terms-and-cond';

@NgModule({
  declarations: [
    TermsAndCond,
  ],
  imports: [
    IonicPageModule.forChild(TermsAndCond),
  ],
  exports: [
    TermsAndCond
  ]
})
export class TermsAndCondModule {}
