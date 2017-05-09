import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, TermsAndCond, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, IntroList, PatientsInNeed, InsuranceOptions} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  items: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'MainList', component: MainList }
    // ];

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
        component: IntroList,
      });
    this.items.push({
        title: 'How to Incorporate Advocacy Into Your Daily Routine',
        component: IncorporateAdvocacy,
      });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
