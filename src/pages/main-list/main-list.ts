import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IntroList } from '../intro-list/intro-list';
import { PatientsInNeed } from '../patients-in-need/patients-in-need';
/**
 * Generated class for the MainList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-main-list',
  templateUrl: 'main-list.html',
})
export class MainList {

	// items: string[];
  items: Array<{title: string, component: Component}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainList');
    this.items = [];
    this.items.push({
        title: 'Introduction',
        component: IntroList,
      });
    this.items.push({
        title: 'Identifying Patients in Need of Resources',
        component: PatientsInNeed,
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

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item);
  }

}
