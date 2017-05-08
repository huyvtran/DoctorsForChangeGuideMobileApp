import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { InAppBrowser} from '@ionic-native';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the Poverty page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-poverty',
  templateUrl: 'poverty.html',
})
export class Poverty {

	container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Poverty');
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'Texas ranked 2nd highest in nation after California with 1,751,000 children living in poverty',sup:1},
  		{title:'27% of Harris County children live in poverty and 26% of Texas children do',sup:1},
  		{title:'Nearly half of the children in Texas live at 200% or below the federal poverty rate, while the national average is 44%',sup:1},
  		{title:'86% of low income children and 53% of poor children have parents who never graduated from high school',sup:1},
  		{title:'In 2011-2012 school year, school districts in Greater Houston area identified 12,512 homeless youth, or 1.3% of public school population',sup:1},
  		{title:'43.6% of infants and children under 4 years of age received WIC assistance',sup:1},
  		{title:'The 2013 Federal Poverty Level (FPL) for a family of 4 equals $23,550. On average, it is estimated that it takes twice that amount to provide the most basic needs',sup:2},
  		{title:'In 2011-2012, the Kaiser Family Foundation reported 23% of Texas adults in poverty',sup:3},
  		{title:'In 2012, 46.5 million people (15%) in the U.S. were in poverty',sup:4},

  	];
  }

  loadLink(){
  	this.items = [
  	{title:'CPPP',href:'http://forabettertexas.org/economicopportunity.html'},
  	{title:'For a Better Texas',href:'http://forabettertexas.org/kidscount.html'},
  	];
  	console.log("items",this.items)
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. "Child Poverty." National Center for Children in Poverty. Columbia University Mailman School of Public Health, n.d. Web. 12 Sept 2014.',
  		'3. "Poverty Rate by Race/Ethnicity." The Kaiser Family Foundation. The Henry J. Kaiser Foundation, n.d. Web. 12 Sept. 2014.',
  		'4. "Poverty: Highlights". United States Department of Census Bureau. U.S. Department of Commerce, n.d. Web. 12 Sept 2014.',

  	];
  }
  

}
