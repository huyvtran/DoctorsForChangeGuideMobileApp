import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService} from '../../providers/storage-service';
import { HomePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-terms-and-cond',
  templateUrl: 'terms-and-cond.html',
})
export class TermsAndCond {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(TermsAndCond).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(TermsAndCond).then(isFav => this.isFavorite = isFav); 
    console.log('ionViewDidLoad TermsAndCond');
  }

}
