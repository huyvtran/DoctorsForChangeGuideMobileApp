import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DomesticViolenceResource } from './domestic-violence-resource';

@NgModule({
  declarations: [
    DomesticViolenceResource,
  ],
  imports: [
    IonicPageModule.forChild(DomesticViolenceResource),
  ],
  exports: [
    DomesticViolenceResource
  ]
})
export class DomesticViolenceResourceModule {}
