import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainList } from './main-list';

@NgModule({
  declarations: [
    MainList,
  ],
  imports: [
    IonicPageModule.forChild(MainList),
  ],
  exports: [
    MainList
  ]
})
export class MainListModule {}
