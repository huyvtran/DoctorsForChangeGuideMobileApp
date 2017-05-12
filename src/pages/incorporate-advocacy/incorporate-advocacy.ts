import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-incorporate-advocacy',
  templateUrl: 'incorporate-advocacy.html',
})
export class IncorporateAdvocacy {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(IncorporateAdvocacy).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(IncorporateAdvocacy).then(isFav => this.isFavorite = isFav); 
    console.log('ionViewDidLoad IncorporateAdvocacy');
  }

}
