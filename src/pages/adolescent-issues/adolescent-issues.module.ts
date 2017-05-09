import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdolescentIssues } from './adolescent-issues';

@NgModule({
  declarations: [
    AdolescentIssues,
  ],
  imports: [
    IonicPageModule.forChild(AdolescentIssues),
  ],
  exports: [
    AdolescentIssues
  ]
})
export class AdolescentIssuesModule {}
