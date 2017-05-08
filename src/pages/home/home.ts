import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainList } from '../main-list/main-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotToMainMenu() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MainList);
  }
}
