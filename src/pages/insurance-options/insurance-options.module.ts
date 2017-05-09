import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsuranceOptions } from './insurance-options';

@NgModule({
  declarations: [
    InsuranceOptions,
  ],
  imports: [
    IonicPageModule.forChild(InsuranceOptions),
  ],
  exports: [
    InsuranceOptions
  ]
})
export class InsuranceOptionsModule {}
