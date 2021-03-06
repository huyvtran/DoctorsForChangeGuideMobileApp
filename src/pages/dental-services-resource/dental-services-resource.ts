import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-dental-services-resource',
  templateUrl: 'dental-services-resource.html',
})
export class DentalServicesResource {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(DentalServicesResource).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(DentalServicesResource).then(isFav => this.isFavorite = isFav); 
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
