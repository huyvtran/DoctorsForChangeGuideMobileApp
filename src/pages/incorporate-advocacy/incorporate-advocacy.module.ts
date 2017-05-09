import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IncorporateAdvocacy } from './incorporate-advocacy';

@NgModule({
  declarations: [
    IncorporateAdvocacy,
  ],
  imports: [
    IonicPageModule.forChild(IncorporateAdvocacy),
  ],
  exports: [
    IncorporateAdvocacy
  ]
})
export class IncorporateAdvocacyModule {}
