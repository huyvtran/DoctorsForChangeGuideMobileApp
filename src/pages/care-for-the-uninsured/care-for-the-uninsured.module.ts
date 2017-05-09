import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CareForTheUninsured } from './care-for-the-uninsured';

@NgModule({
  declarations: [
    CareForTheUninsured,
  ],
  imports: [
    IonicPageModule.forChild(CareForTheUninsured),
  ],
  exports: [
    CareForTheUninsured
  ]
})
export class CareForTheUninsuredModule {}
