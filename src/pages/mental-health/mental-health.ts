import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-mental-health',
  templateUrl: 'mental-health.html',
})
export class MentalHealth {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(MentalHealth).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(MentalHealth).then(isFav => this.isFavorite = isFav); 
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'In 2010, Texas was ranked 4th in the nation for the highest number of teen births with 52.2 births per 1,000 teens, and 1st in the nation for repeat teen births. More than 20% of the teen births reported statewide were repeat teen births',sup:1},
   		{title:'Mental illness is associated with lower use of medical care, reduced adherence to treatment therapies for chronic diseases, and higher risks of adverse health outcomes',sup:1},
  		{title:'Texas ranks last nationally in per capita mental health spending, at $38.38',sup:2},
  		{title:'Many families in Houston experience difficulty in accessing mental health services for their children, as 14,000 children in Houston cannot access mental health services',sup:2},
  		{title:'Alcohol and substance abuse continues to affect many children in Texas; nearly 1 in 4 Texas teens are frequent binge drinkers',sup:2},
  		{title:'Only a quarter of the children needing public mental health services in Harris County have access',sup:2},
  		{title:'Over 95% of families accessing MHMRA fell below Federal Poverty Level. Many of these families rely on public assistance to facilitate payment; 35.1% of children on MHMRA’s caseload in 2011 used Medicaid or CHIP, while an additional 25.8% were uninsured',sup:2},
  		{title:'Special education enrollment declined slightly during the 2010-2011 school year, continuing a decade-long trend for Harris County. Learning disabilities were the leading primary impairment, representing 39.6% of students, while speech impairment, autism, and intellectual disability comprised 18.1%, 9.8%, and 9.3% of students, respectively',sup:2},
  		{title:'Mental illness and substance abuse are oftentimes contributing factors to teen suicide, the third-leading cause of death among 15-24 year olds',sup:2},
  		{title:'Among Texas high school students, 29.2% reported feeling sad or hopeless for at least 2 weeks in a row, 15.8% seriously considered suicide, 13.2% made a plan, and 10.8% of students attempted to kill themselves',sup:2}
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'MHMRA',href:'http://www.mhmraharris.org/'},
	{title:'Mental Health of America',href:'http://www.mhahouston.org/'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. “U.S. Adult Mental Illness Surveillance Report.” Centers for Disease Control and Prevention. Office of the Associate Director for Communication, Sept 2011. Web. 15 Sept 2014.',
  		'2. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',


  	];
  }

}
