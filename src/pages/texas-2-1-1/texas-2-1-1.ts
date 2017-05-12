import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-texas-2-1-1',
  templateUrl: 'texas-2-1-1.html',
})
export class Texas211 {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(Texas211).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(Texas211).then(isFav => this.isFavorite = isFav);
    console.log('ionViewDidLoad Texas211');
  }

}
