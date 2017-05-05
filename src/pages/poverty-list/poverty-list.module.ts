import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PovertyList } from './poverty-list';

@NgModule({
  declarations: [
    PovertyList,
  ],
  imports: [
    IonicPageModule.forChild(PovertyList),
  ],
  exports: [
    PovertyList
  ]
})
export class PovertyListModule {}
