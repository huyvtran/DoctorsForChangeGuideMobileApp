import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';
import { DomesticViolenceResource, DentalServicesResource, HomePage, TermsAndCond, Texas211, AdolescentIssuesRes,AutismServicesResource } from '../pages';

@IonicPage()
@Component({
  selector: 'page-community-resources',
  templateUrl: 'community-resources.html',
})
export class CommunityResources {

  items: Array<{title: string, component: Component}>;


  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private storageService : StorageService) {
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;
  isFavorite;
  toggleFavorite(){
    this.storageService.toggleFavoritePage(CommunityResources).then(isFavorite => this.isFavorite = isFavorite);
  }

  ionViewDidLoad() {
    this.storageService.isFavorite(CommunityResources).then(isFav => this.isFavorite = isFav);
    
    this.items = [];
    this.items.push({
        title: 'Texas 2-1-1 (Texas 2-1-1 is a searchable statewide list of resources.)',
        component: Texas211,
      });
    this.items.push({
        title: 'Adolescent Issues',
        component: AdolescentIssuesRes,
      });
    this.items.push({
        title: 'Autism Services',
        component: AutismServicesResource,
      });
    this.items.push({
        title: 'Dental Services',
        component: DentalServicesResource,
      });
    this.items.push({
        title: 'Domestic Violence',
        component: DomesticViolenceResource,
      });
    this.items.push({
        title: 'Early Childhood Education and Parenting Support',
        component: TermsAndCond,
      });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(item);
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
