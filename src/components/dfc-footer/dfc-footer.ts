import { Component } from '@angular/core';
import { HomePage, TermsAndCond } from '../../pages/pages';

@Component({
  selector: 'dfc-footer',
  templateUrl: 'dfc-footer.html'
})
export class DFCFooter {

  Home : any = HomePage;
  TermsAndCond : any = TermsAndCond;

  constructor() {}

}
