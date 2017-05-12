import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommunityResources } from './community-resources';

@NgModule({
  declarations: [
    CommunityResources,
  ],
  imports: [
    IonicPageModule.forChild(CommunityResources),
  ],
  exports: [
    CommunityResources
  ]
})
export class CommunityResourcesModule {}
