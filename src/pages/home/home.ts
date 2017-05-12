import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { StorageService} from '../../providers/storage-service';

import { DomesticViolenceResource, DentalServicesResource, AutismServicesResource, AdolescentIssuesRes, Texas211, CommunityResources, TermsAndCond, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, InsuranceOptions, Education, HumanTrafficking, DomesticViolence, MentalHealth, AdolescentIssues, Obesity, HealthCare, FoodInsecurity, MainList, IntroList, PatientsInNeed, Poverty} from '../pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  favorites:any;

  constructor(public navCtrl: NavController,private iab: InAppBrowser, private storageService : StorageService) {

  }



  allPages :any;
  savedPages:any;

  doRefresh(refresher){
    this.storageService.getAllFavorites().then(data => {
    this.savedPages = data
    this.favorites = [];

    for (var i = 0; i < this.allPages.length;i++) {
      if(this.savedPages.indexOf(this.allPages[i].name) >= 0 ) {
        this.favorites.push(this.allPages[i]);
      }
    }
    refresher.complete();
    });


  }

  ionViewDidLoad() {
    this.allPages = [
      DomesticViolenceResource,DentalServicesResource, AutismServicesResource, AdolescentIssuesRes, Texas211, CommunityResources, TermsAndCond, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, InsuranceOptions, Education, HumanTrafficking, DomesticViolence, MentalHealth, AdolescentIssues, Obesity, HealthCare, FoodInsecurity, MainList, IntroList, PatientsInNeed, Poverty
    ];
    this.storageService.getAllFavorites().then(data => {
    this.savedPages = data
    this.favorites = [];

    for (var i = 0; i < this.allPages.length;i++) {
      if(this.savedPages.indexOf(this.allPages[i].name) >= 0 ) {
        this.favorites.push(this.allPages[i]);
      }
    }
    });
  }

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;

  goToComponent(component){
    this.navCtrl.push(component);
  }
  gotToMainMenu() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MainList);
  }

  gotToTerm() {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(TermsAndCond);
  }

  launch(url) {
  	console.log("url",url)
    this.iab.create(url,'_system'); 
  }
}
