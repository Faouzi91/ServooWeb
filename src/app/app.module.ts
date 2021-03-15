import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MDBBootstrapModule,
  InputsModule,
  WavesModule,
  ButtonsModule,
} from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { SolutionComponent } from './solution/solution.component';

const appRoutes: Routes = [{ path: 'company', component: CompanyComponent }];

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HomePageComponent,
    HeaderNavComponent,
    FooterComponent,
    SolutionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    WavesModule,
    ButtonsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: 'company',
        component: CompanyComponent,
      },
      {
        path: 'solution',
        component: SolutionComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
    MDBBootstrapModule.forRoot(),
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
