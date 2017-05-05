import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroList } from './intro-list';

@NgModule({
  declarations: [
    IntroList,
  ],
  imports: [
    IonicPageModule.forChild(IntroList),
  ],
  exports: [
    IntroList
  ]
})
export class IntroListModule {}
