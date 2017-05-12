import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
    
import { DomesticViolenceResource, DentalServicesResource, AutismServicesResource, AdolescentIssuesRes, Texas211, CommunityResources, TermsAndCond, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, InsuranceOptions, Education, HumanTrafficking, DomesticViolence, MentalHealth, AdolescentIssues, Obesity, HealthCare, FoodInsecurity,HomePage, MainList, IntroList, PatientsInNeed, Poverty} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { StorageService} from '../providers/storage-service';
import { IonicStorageModule } from '@ionic/storage';

import { DFCFooter } from '../components/dfc-footer/dfc-footer';
import { DFCHeader } from '../components/dfc-header/dfc-header';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainList,
    IntroList,
    Poverty,
    PatientsInNeed,
    FoodInsecurity,
    HealthCare,
    Obesity,
    AdolescentIssues,
    MentalHealth,
    DomesticViolence,
    HumanTrafficking,
    Education,
    InsuranceOptions,
    CareForTheUninsured,
    PresDrugAndImmRes,
    IncorporateAdvocacy,
    TermsAndCond,
    CommunityResources,
    DFCFooter,
    DFCHeader,
    Texas211,
    AdolescentIssuesRes,
    AutismServicesResource,
    DentalServicesResource,
    DomesticViolenceResource
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainList,
    IntroList,
    Poverty,
    PatientsInNeed,
    FoodInsecurity,
    HealthCare,
    Obesity,
    AdolescentIssues,
    MentalHealth,
    DomesticViolence,
    HumanTrafficking,
    Education,
    InsuranceOptions,
    CareForTheUninsured,
    PresDrugAndImmRes,
    IncorporateAdvocacy,
    TermsAndCond,
    CommunityResources,
    DFCFooter,
    DFCHeader,
    Texas211,
    AdolescentIssuesRes,
    AutismServicesResource,
    DentalServicesResource,
    DomesticViolenceResource
  ],
  providers: [
  StorageService,
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
