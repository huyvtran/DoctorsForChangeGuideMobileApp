import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IntroList } from '../intro-list/intro-list';
// import { PatientsInNeed } from '../patients-in-need/patients-in-need';
/**
 * Generated class for the PatientsInNeed page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-patients-in-need',
  templateUrl: 'patients-in-need.html',
})
export class PatientsInNeed {
  items: Array<{title: string, component: Component}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientsInNeed');
    this.items = [];
    this.items.push({
        title: 'Introduction',
        component: IntroList,
      });
    this.items.push({
        title: 'Identifying Patients in Need of Resources',
        component: IntroList,
      });
    this.items.push({
        title: 'Insurance Options',
        component: IntroList,
      });
    this.items.push({
        title: 'Care for the Uninsured',
        component: IntroList,
      });
    this.items.push({
        title: 'Prescription Drug and Immunization Resources',
        component: IntroList,
      });
    this.items.push({
        title: 'Community Resources',
        component: IntroList,
      });
    this.items.push({
        title: 'How to Incorporate Advocacy Into Your Daily Routine',
        component: IntroList,
      });
  }

  launch(url) {
  	console.log("url",url)
    this.iab.create(url,'_system'); 
  }

}
