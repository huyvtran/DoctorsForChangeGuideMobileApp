import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Poverty } from '../poverty/poverty';
/**
 * Generated class for the IntroList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-intro-list',
  templateUrl: 'intro-list.html',
})
export class IntroList {

  items: Array<{title: string, component: Component}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroList');
    this.items = [];
    this.items.push({
        title: 'Poverty',
        component: Poverty,
      });
    this.items.push({
        title: 'Food Insecurity',
        component: IntroList,
      });
    this.items.push({
        title: 'Health Care',
        component: IntroList,
      });
    this.items.push({
        title: 'Obesity',
        component: IntroList,
      });
    this.items.push({
        title: 'Adolescent Issues',
        component: IntroList,
      });
    this.items.push({
        title: 'Mental Health',
        component: IntroList,
      });
    this.items.push({
        title: 'Domestic Violence',
        component: IntroList,
      });
    this.items.push({
        title: 'Human Trafficking',
        component: IntroList,
      });
    this.items.push({
        title: 'Education',
        component: IntroList,
      });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item);
  }

}
