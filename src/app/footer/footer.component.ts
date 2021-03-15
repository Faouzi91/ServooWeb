import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  moveToTop() {
    document.getElementById('home').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
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
  moveToTechnology() {
    document.getElementById('technology').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  moveToContact() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
