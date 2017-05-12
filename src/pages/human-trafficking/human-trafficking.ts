import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-human-trafficking',
  templateUrl: 'human-trafficking.html',
})
export class HumanTrafficking {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(HumanTrafficking).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(HumanTrafficking).then(isFav => this.isFavorite = isFav); 

    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'In 2010, Texas was ranked 4th in the nation for the highest number of teen births with 52.2 births per 1,000 teens, and 1st in the nation for repeat teen births. More than 20% of the teen births reported statewide were repeat teen births',sup:1},
  		{title:'While international trafficking is a big problem in the U.S., the number of American child victims trafficked with in the U.S. far surpasses the number of victims brought into the country each year',sup:1},
  		{title:'Texas is a hub of human trafficking. The U.S. Department of Justice identified the I-10 corridor as the #1 human trafficking route in the U.S., with as many as 1 in 4 victims in the U.S. passing through Texas',sup:1},
  		{title:'In 2011, Texas was responsible for the 2nd highest number of calls to the National Human Trafficking Hotline',sup:1},
  		{title:'Houston is a hub for all forms of human trafficking due to its proximity to the border, national airports and seaports and diverse population',sup:1},
  		{title:'Domestic minor sex trafficking is especially prevalent, and shows that as many as 300,000 U.S. children are at risk for sexual exploitation',sup:1},
  		{title:'76% of all confirmed human trafficking incidents involved forced prostitution and child sex trafficking',sup:2},
  		{title:'An estimated 1 out of every 3 children that run away is lured into sex trafficking within 48 hours of leaving home',sup:2},  
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Children at Risk',href:'http://childrenatrisk.org/content/?page_id=8025'},
  	{title:'Polaris Project',href:'https://polarisproject.org/'},
  	{title:'United Against Human Trafficking',href:'http://www.uaht.org/'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. Children at Risk. Growing Up in Houston 2010-2012, Assessing the Quality of Life of Our Children. Children at Risk, 2010.',


  	];
  }

}
