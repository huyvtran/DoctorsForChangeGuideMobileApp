import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomesticViolence } from './domestic-violence';

@NgModule({
  declarations: [
    DomesticViolence,
  ],
  imports: [
    IonicPageModule.forChild(DomesticViolence),
  ],
  exports: [
    DomesticViolence
  ]
})
export class DomesticViolenceModule {}
