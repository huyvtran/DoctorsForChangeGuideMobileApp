import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-food-insecurity',
  templateUrl: 'food-insecurity.html',
})
export class FoodInsecurity {

  container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'Of Texas households, 18.7% are food insecure and live with the risk of running out of food on a daily basis',sup:1},
  		{title:'In Harris County, 25.5% of children live in food insecure households',sup:1},
  		{title:'47% of Houston Food Bank clients are <18 years of age',sup:2},
  		{title:'Food insecurity is linked to poor performance in school, reduced attention in class, behavioral issues, increased school absences, a higher risk of obesity, and more suicidal or depressive tendencies among children',sup:1},
  		{title:'21.6% of all children are food insecure in the U.S.; 27.1% of children in Texas are food insecure',sup:1},
  		{title:'Minorities are more at risk; of all children receiving food stamps in Harris County in 2011, 56.62% were Latino and 28.63% were Black',sup:1},
  		{title:'43% of these children in Harris County were under the age of five',sup:1},
  		{title:'On an average day in 2010-2011 school year, 372,425 students in Harris County were eligible for a free or reduced price breakfast but did not receive one',sup:1},

  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Children at Risk',href:'http://childrenatrisk.org/content/?page_id=2958'},
  	{title:'Hunger Free Texas',href:'http://www.hungerfreetexans.org/'},
  	{title:'Texas Hunger Institute',href:'http://www.baylor.edu/texashunger/index.php?id=99647'},
  	{title:'The Houston Food Bank',href:'http://www.houstonfoodbank.org/'},
  	];
  	console.log("items",this.items)
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. "Child Hunger: Fact Sheets" Houston Food Bank. Houston Food Bank, n.d. Web. 12 Sept 2014.',

  	];
  }

}
