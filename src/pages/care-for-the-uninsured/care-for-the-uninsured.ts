import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-care-for-the-uninsured',
  templateUrl: 'care-for-the-uninsured.html',
})
export class CareForTheUninsured {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CareForTheUninsured');
  }

    launch(url) {
  	console.log("url",url)
    this.iab.create(url,'_system'); 
  }

    shownGroup : any;
   toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
