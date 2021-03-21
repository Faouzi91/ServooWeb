import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'servooWeb';
  translate: any;

  constructor(translate: TranslateService) {
    /**Translation service */
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }
  /**Translation functions */
  public changeLanguage(language: string) {
    this.translate.use(language);
  }
  public get currentLanguage(): string {
    return this.translate.currentLang;
  }
}



$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {
    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });
});
