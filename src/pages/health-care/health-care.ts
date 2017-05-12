import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-health-care',
  templateUrl: 'health-care.html',
})
export class HealthCare {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(HealthCare).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(HealthCare).then(isFav => this.isFavorite = isFav); 
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'In 2009, 19.5% of Harris County children were uninsured 127% of Harris County children live in poverty and 26% of Texas children do',sup:1},
  		{title:'In 2009, Texas was 49th in the nation for uninsured children with 16% of children not receiving any type of health coverage 186% of low income children and 53% of poor children have parents who never graduated from high school',sup:1},
  		{title:'In 2010, only slightly more than half of pregnant women in Harris County received early prenatal care (starting medical care in the first trimester of pregnancy and continuing care until delivery)',sup:1},
  		{title:'8.8% of babies born in Harris County in 2010 were classified as low birth weight, up from 7.4% in 2000',sup:1},
  		{title:'About 61% of children served at school based clinics do not have any type of health care coverage and the remaining 39% are children who would not obtain health care due to transportation issues, parents who cannot afford to miss work for a doctor visit, high private insurance deductibles, or simply lack of parental involvement',sup:1},
  		{title:'Texas currently ranks 42nd in the ratio of physicians to population (68 per 100,000 compared with U.S. average of 81 per 100,000)',sup:1},
  		{title:'3 out of 4 Texas counties are designated as Health Professions Shortage Areas',sup:2},

  	];
  }

  loadLink(){
  	this.items = [
  	{title:'CPPP',href:'http://forabettertexas.org/economicopportunity.html'},
  	{title:'Kaiser Family Foundation',href:'http://kff.org'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. "Texas State Health Plan, 2013-2014 Update". Texas Department of State Health Services. Statewide Health Coordinating Council, n.d. Web. 12 Sept 2014.                ',

  	];
  }
}
