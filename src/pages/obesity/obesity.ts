import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-obesity',
  templateUrl: 'obesity.html',
})
export class Obesity {

container = "Content";
	items;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(Obesity).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(Obesity).then(isFav => this.isFavorite = isFav); 
    this.loadContent();
  }
  
  launch(url) {
    this.iab.create(url,'_system'); 
  }

  loadContent(){
  	this.items = [
  		{title:'Texas ranked 2nd highest in nation after California with 1,751,000 children living in poverty',sup:1},	
  		{title:'The CDC lists two main causes for the obesity epidemic: an increased intake of energy-dense foods that are high in fat, salt, and sugars but low in vitamins, minerals and other micronutrients; and a decrease in physical activity due to the increasingly sedentary nature of many forms of work, changing modes of transportation, and increasing urbanization',sup:1},
  		{title:'Texas is ranked 6th in the nation for childhood obesity',sup:2},
  		{title:'23% of students surveyed said that they drink more than 2 sodas per day, while 22% reported eating fast food three or more times per week',sup:1},
  		{title:'77% of students get fewer than 60 minutes of exercise per day, compared with the 72% who reported spending 2 or more hours in front of a screen on a daily basis',sup:1},
  		{title:'Texas teens drink more soda, watch more television, and have fewer family meals than the national average by around 3% in each category',sup:1},
  		{title:'Latino children have been the primary targets of obesity epidemic; in 2007 it was revealed that 46% of Latino children in Texas were obese, as opposed to 26% and 23% for Black and White children, respectively',sup:1},
  		{title:'Food deserts are neighborhoods that lack grocery store or healthy produce available for purchase',sup:1},
  		{title:'In the Houston area, the ratio of supermarkets to people is 1:12,000, much higher than the national ratio of 1:8,600',sup:1},
  		{title:'Within Houston, areas as large as 10 miles have been identified as containing only a single food source: gas stations that sell tobacco, alcohol, and fatty snacks',sup:1},
  		{title:'Studies show that students who eat breakfast at school are more likely to meet or exceed dietary vitamin and mineral recommendations. However, the free school breakfast program is underutilized; for every 100 children who eat free or reduced-price lunch, just 56 eat free or reduced-priced breakfast',sup:1},
  		{title:'In Harris County, 29% of adults are obese and 23% are physically inactive',sup:3},
  		{title:'In 2009-2010, more than a third (35.7%) of U.S. adults and 17% of U.S. children and adolescents were obese and adults aged 60 and over were more likely to be obese than younger adults',sup:4},
  		{title:'The estimated annual medical cost of obesity in the U.S. was \$147 billion in 2008; the medical costs for people who are obese were \$1,429 higher than those of normal weight',sup:5},
  		{title:'Among non-Hispanic black and Mexican-American men, those with higher incomes are more likely to be obese than those with low incomes',sup:5},
  		{title:'Higher income women are less likely to be obese than low income women',sup:5},
  		{title:'There is no significant relationship between obesity and education among men. Among women, however, there is a trend – those with college degrees are less likely to be obese compared with less educated women',sup:5}
  	];
  }

  loadLink(){
  	this.items = [
  	{title:'Brighter Bites',href:'https://www.brighterbites.org/'},
  	{title:'Healthy Living Matters',href:'http://www.healthylivingmatters.net/'},
  	{title:'State of Obesity',href:'http://stateofobesity.org/states/tx/'},
  	];
  }

  loadRef(){
  	this.items = [
  		'1. Children at Risk. Growing Up in Houston 2012-2014, Assessing the Quality of Life of Our Children. Children at Risk, 2012.',
  		'2. “Physical Health.” Children at Risk. Children at Risk, n.d. Web. 12 Sept 2014.',
  		'3. “Houston/Harris County Community Transformation Initiative Health Equity Assessment 2012.” The City of Houston. Houston Department of Health and Human Services, 2012. Web. 15 Sept 2014.',
  		'4. Ogden, CL, Carroll MD, Kit BK, Flegal KM. Prevalence of Obesity in the United States, 2009-2010. NCHS Data Brief, No 82. Hyattsville, MD: National Center for Health Statistics. 2012.',
  		'5. “Overweight and Obesity: Adult Obesity Facts.” Centers for Disease Control and Prevention. National Center for Chronic Disease Prevention and Health Promotion, 9 Sept 2014. Web. 12 Sept 2014.',

  	];
  }

}
