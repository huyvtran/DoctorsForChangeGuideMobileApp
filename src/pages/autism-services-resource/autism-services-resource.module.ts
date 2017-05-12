import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutismServicesResource } from './autism-services-resource';

@NgModule({
  declarations: [
    AutismServicesResource,
  ],
  imports: [
    IonicPageModule.forChild(AutismServicesResource),
  ],
  exports: [
    AutismServicesResource
  ]
})
export class AutismServicesResourceModule {}
