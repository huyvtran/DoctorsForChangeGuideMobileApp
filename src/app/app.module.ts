import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
    
import { TermsAndCond, IncorporateAdvocacy, PresDrugAndImmRes, CareForTheUninsured, InsuranceOptions, Education, HumanTrafficking, DomesticViolence, MentalHealth, AdolescentIssues, Obesity, HealthCare, FoodInsecurity,HomePage, MainList, IntroList, PatientsInNeed, Poverty} from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    TermsAndCond
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
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
    TermsAndCond
  ],
  providers: [
    InAppBrowser,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
