import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresDrugAndImmRes } from './pres-drug-and-imm-res';

@NgModule({
  declarations: [
    PresDrugAndImmRes,
  ],
  imports: [
    IonicPageModule.forChild(PresDrugAndImmRes),
  ],
  exports: [
    PresDrugAndImmRes
  ]
})
export class PresDrugAndImmResModule {}
