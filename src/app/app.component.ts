import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage, IntroList, PatientsInNeed} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'MainList', component: MainList }
    // ];

    this.pages = [];
    this.pages.push({
        title: 'Home',
        component: HomePage,
      });
    this.pages.push({
        title: 'Introduction',
        component: IntroList,
      });
    this.pages.push({
        title: 'Identifying Patients in Need of Resources',
        component: PatientsInNeed,
      });
    this.pages.push({
        title: 'Insurance Options',
        component: IntroList,
      });
    this.pages.push({
        title: 'Care for the Uninsured',
        component: IntroList,
      });
    this.pages.push({
        title: 'Prescription Drug and Immunization Resources',
        component: IntroList,
      });
    this.pages.push({
        title: 'Community Resources',
        component: IntroList,
      });
    this.pages.push({
        title: 'How to Incorporate Advocacy Into Your Daily Routine',
        component: IntroList,
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
