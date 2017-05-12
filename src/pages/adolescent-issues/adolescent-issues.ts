import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-adolescent-issues',
  templateUrl: 'adolescent-issues.html',
})
export class AdolescentIssues {

AdolescentIssues : any = AdolescentIssues;

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(AdolescentIssues).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(AdolescentIssues).then(isFav => this.isFavorite = isFav); 
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'In 2010, Texas was ranked 4th in the nation for the highest number of teen births with 52.2 births per 1,000 teens, and 1st in the nation for repeat teen births. More than 20% of the teen births reported statewide were repeat teen births',sup:1},
  		{title:'In 2010, Harris County reported a similar teen birth rate, 52.1 births per 1,000 15 to 19 year olds and a total of more than 7,500 teen births. Harris County accounted for 15% of all teen births in the State of Texas',sup:1},
  		{title:'The teen birth rate in Harris County has been on the decline during the past several years, however Harris County rates, like the Texas teen birth rate, are still much higher than the average for the U.S.',sup:1},
  		{title:'Studies show that abstinence-only programs do not significantly delay sexual initiation or reduce STI rates among teens',sup:1},
  		{title:'When comparing Texas to states with lower teen birth and STI rates, one major difference is Texas’ lack of sex education programs that teach medically accurate information in addition to abstinence',sup:1},
  		{title:'Based on 2013 survey data, 15.7% of students between 9-12th grade had smoked cigarettes on at least 1 day during the past 30 days and 34.9% had used alcohol in the past month',sup:2},
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Covenant House',href:'https://www.covenanthouse.org/'},
  	{title:'US Department of Health and Human Services',href:'https://www.hhs.gov/ash/oah/adolescent-health-topics/reproductive-health/states/tx.html'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. Kann, Laura, et al. Youth Risk Behavior Surveillance – United States, 2013. MMWR 2014; 63 (No. 4):1-168.',


  	];
  }

}
