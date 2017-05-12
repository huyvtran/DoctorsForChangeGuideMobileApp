import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-domestic-violence',
  templateUrl: 'domestic-violence.html',
})
export class DomesticViolence {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(DomesticViolence).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(DomesticViolence).then(isFav => this.isFavorite = isFav);
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'In 2010, Texas was ranked 4th in the nation for the highest number of teen births with 52.2 births per 1,000 teens, and 1st in the nation for repeat teen births. More than 20% of the teen births reported statewide were repeat teen births',sup:1},
  		{title:'In 2012, there were a reported 26.2% of Texas adults that were denied shelter due to lack of space',sup:1},
  		{title:'In 2012, a reported 114 women were killed as a consequence of domestic violence',sup:1},
  		{title:'188,992 family violence incidents were reported in Texas in 2012, which is a 6% increase when compared to 2011',sup:1},
  		{title:'In 2012, there were 11,994 adults and 14,534 children sheltered in Texas',sup:1},
  		{title:'The largest percent of family violence reports was between other family members, the 2nd most commonly reported relationship among offenders and victims was married spouses',sup:2},
  		{title:'1 in 4 women have been the victim of severe physical violence by an intimate partner, while 1 in 7 men have experienced the same',sup:3},
  		{title:'Nearly 1 in 5 women (19.3%) and 1 in 59 men (1.7%) have been raped in their lifetime',sup:3},
  		{title:'More than 1 in 4 women and more than 1 in 10 men who experienced rape, stalking or physical violence by an intimate partner reported significant short or long term impacts, such as post-traumatic stress disorder symptoms or injury.',sup:3},
  		{title:'Men and women who experienced these forms of violence were more likely to report frequent headaches, chronic pain, difficulty sleeping, activity limitations, poor physical health, and poor mental health than men and women who did not experience these forms of violence',sup:3}
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Houston Area Women\'s Shelter',href:'http://www.hawc.org/'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. “Facts and Statistics.” Texas Council on Family Violence. Texas Health and Human Services Commission, the Texas Council on Family Violence, and the Texas Department of Public Safety, n.d. Web. 17 Sept 2014.',
  		'2. “Chapter 5: Family Violence.” 2013 Crime in Texas. Texas Department of Public Safety, 2013. Web. 17 Sept 2014.',
  		'3. Breiding MJ, Smith SG, Basile KC, Walters ML, Chen J, Merrick MT. Prevalence and Characteristics of Sexual Violence, Stalking, and Intimate Partner Violence Victimization—National Intimate Partner and Sexual Violence Survey, United States, 2011. MMWR 2014; 63(SS-8): 1-18.',

  	];
  }

}
