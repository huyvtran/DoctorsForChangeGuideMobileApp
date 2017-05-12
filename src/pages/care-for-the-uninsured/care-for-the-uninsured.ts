import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-care-for-the-uninsured',
  templateUrl: 'care-for-the-uninsured.html',
})
export class CareForTheUninsured {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(CareForTheUninsured).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(CareForTheUninsured).then(isFav => this.isFavorite = isFav);
    //this.loadContent();
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
