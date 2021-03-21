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
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('fr');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'fr');
  }
  /**Translation functions */
  public changeLanguage(language: string) {
    console.log(language);
    
    this.translate.use(language);
  }
  public get currentLanguage(): string {
    return this.translate.currentLang;
  }
  

  ngOnInit(): void {}

  moveToTop()  {
      document.getElementById("home")!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToDevelopment() {
      document.getElementById("development")!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  moveToSolution(){
      document.getElementById("solution")!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToServices(){
      document.getElementById('services')!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToTechnology() {
      document.getElementById("technology")!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToContact() {
      document.getElementById("contact")!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
