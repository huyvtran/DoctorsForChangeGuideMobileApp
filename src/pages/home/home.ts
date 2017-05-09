import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MainList,TermsAndCond} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private iab: InAppBrowser) {

  }

  MainList : any = MainList;
  TermsAndCond : any = TermsAndCond;

  gotToMainMenu() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MainList);
  }

  gotToTerm() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TermsAndCond);
  }

  launch(url) {
  	console.log("url",url)
    this.iab.create(url,'_system'); 
  }
}
