import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdolescentIssuesRes } from './adolescent-issues-res';

@NgModule({
  declarations: [
    AdolescentIssuesRes,
  ],
  imports: [
    IonicPageModule.forChild(AdolescentIssuesRes),
  ],
  exports: [
    AdolescentIssuesRes
  ]
})
export class AdolescentIssuesResModule {}
