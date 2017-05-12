import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class Education {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(Education).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(Education).then(isFav => this.isFavorite = isFav);
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'Quality early education increases school readiness and contributes to better student academic outcomes, especially in children of low socioeconomic status',sup:1},
  		{title:'Texas Pre-K programs have lost $223 million in recent education budget cuts and as a result many full day Pre-K programs have been reduced to half-day programs or eliminated entirely',sup:1},
  		{title:'The number of national accredited child care providers operating in Harris County has decreased over 70% since 2006',sup:1},
  		{title:'51.8% of Harris County students were identified as at risk of dropping out in 2011',sup:1},
  		{title:'The 4-year graduation rate for the 2006-2007 first time freshman cohort was 68.9% in Harris County, while the national high school graduation rate is 75.5%',sup:1},
  		{title:'High school dropouts face limited earning potential, a higher likelihood of committing crime, and a shorter life span',sup:1},
  		{title:'Research shows that the road to dropping out can begin as early as the 3rd grade, with an especially strong link between 3rd grade reading skills and graduation',sup:1},
  		{title:'In 2009, the unemployment rate for dropouts was 15.4% compared to 9.4% for high school graduates and 4.7% for those with a Bachelor’s degree',sup:1},
  		{title:'In 2011, it was reported that 65.4% of students enrolled in Harris County public schools were economically disadvantaged',sup:1},
  		{title:'While 54% of Greater Houston students will enter college, only about 19% of Texas students will complete college',sup:1}, 
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Children at Risk',href:'http://childrenatrisk.org/content/?page_id=8048'},
  	{title:'Collaborative for Children',href:'https://www.collabforchildren.org/'},
  	{title:'Early Matters',href:'https://www.houston.org/earlymatters/'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  	];
  }

}
