import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
 
  constructor() {}

  ngOnInit(): void {}

  moveToTop()  {
      document.getElementById("home").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToDevelopment() {
      document.getElementById("development").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  moveToSolution(){
      document.getElementById("solution").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToServices(){
      document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToTechnology() {
      document.getElementById("technology").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToContact() {
      document.getElementById("contact").scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
