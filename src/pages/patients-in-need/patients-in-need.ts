import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-patients-in-need',
  templateUrl: 'patients-in-need.html',
})
export class PatientsInNeed {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(PatientsInNeed).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(PatientsInNeed).then(isFav => this.isFavorite = isFav); 
    console.log('ionViewDidLoad PatientsInNeed');
    this.items = [];
    this.items.push({
        topic: 'Question 1',
        answer: "IntroList",
      });
    this.items.push({
        topic: 'Question 2',
        answer: "IntroList",
      });

  }

  launch(url) {
  	console.log("url",url)
    this.iab.create(url,'_system'); 
  }

  shownGroup : any;
   toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
