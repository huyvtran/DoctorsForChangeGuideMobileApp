import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainList, TermsAndCond, Education, HumanTrafficking, DomesticViolence, MentalHealth, AdolescentIssues, Obesity, Poverty, FoodInsecurity, HealthCare } from '../pages';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-intro-list',
  templateUrl: 'intro-list.html',
})
export class IntroList {

  items: Array<{title: string, component: Component}>;
  MainList : any = MainList;
  TermsAndCond : any = TermsAndCond;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {

  }

  launch(url) {
    console.log("url",url)
    this.iab.create(url,'_system'); 
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
        component: FoodInsecurity,
      });
    this.items.push({
        title: 'Health Care',
        component: HealthCare,
      });
    this.items.push({
        title: 'Obesity',
        component: Obesity,
      });
    this.items.push({
        title: 'Adolescent Issues',
        component: AdolescentIssues,
      });
    this.items.push({
        title: 'Mental Health',
        component: MentalHealth,
      });
    this.items.push({
        title: 'Domestic Violence',
        component: DomesticViolence,
      });
    this.items.push({
        title: 'Human Trafficking',
        component: HumanTrafficking,
      });
    this.items.push({
        title: 'Education',
        component: Education,
      });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item);
  }

}
