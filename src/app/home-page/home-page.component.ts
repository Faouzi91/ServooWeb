
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  moveToDevelopment() {
    document.getElementById('development').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }

  moveToSolution() {
    document.getElementById('solution').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToServices() {
    document.getElementById('services').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
