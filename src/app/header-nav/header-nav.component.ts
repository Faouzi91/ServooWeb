import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  constructor(public translate: TranslateService) {
    /**Translation service */
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
  }
  /**Translation functions */
  switchLang(lang: string) {
    this.translate.use(lang);
  }
  ngOnInit(): void {}

  moveToTop() {
    document.getElementById('home')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToDevelopment() {
    document.getElementById('development')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  moveToSolution() {
    document.getElementById('solution')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToServices() {
    document.getElementById('services')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToTechnology() {
    document.getElementById('technology')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToContact() {
    document.getElementById('contact')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
