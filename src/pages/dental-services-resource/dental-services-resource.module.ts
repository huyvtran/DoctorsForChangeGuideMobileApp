import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DentalServicesResource } from './dental-services-resource';

@NgModule({
  declarations: [
    DentalServicesResource,
  ],
  imports: [
    IonicPageModule.forChild(DentalServicesResource),
  ],
  exports: [
    DentalServicesResource
  ]
})
export class DentalServicesResourceModule {}
