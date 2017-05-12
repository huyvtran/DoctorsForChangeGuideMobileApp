import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityResources, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, IntroList, PatientsInNeed, InsuranceOptions} from '../pages';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { HomePage, TermsAndCond } from '../pages';

@IonicPage()
@Component({
  selector: 'page-main-list',
  templateUrl: 'main-list.html',
})
export class MainList {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(MainList).then(isFavorite => this.isFavorite = isFavorite);
  }

  items: Array<{title: string, component: Component}>;


  launch(url) {
    console.log("url",url)
    this.iab.create(url,'_system'); 
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(MainList).then(isFav => this.isFavorite = isFav); 
    this.items = [];
    this.items.push({
        title: 'Introduction',
        component: IntroList,
      });
    this.items.push({
        title: 'Identifying Patients in Need of Resources',
        component: PatientsInNeed,
      });
    this.items.push({
        title: 'Insurance Options',
        component: InsuranceOptions,
      });
    this.items.push({
        title: 'Care for the Uninsured',
        component: CareForTheUninsured,
      });
    this.items.push({
        title: 'Prescription Drug and Immunization Resources',
        component: PresDrugAndImmRes,
      });
    this.items.push({
        title: 'Community Resources',
        component: CommunityResources,
      });
    this.items.push({
        title: 'How to Incorporate Advocacy Into Your Daily Routine',
        component: IncorporateAdvocacy,
      });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item);
  }

}
