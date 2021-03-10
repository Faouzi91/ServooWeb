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

const appRoutes: Routes = [{ path: 'company', component: CompanyComponent }];

@NgModule({
  declarations: [AppComponent, CompanyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputsModule,
    WavesModule,
    ButtonsModule,
    RouterModule.forRoot(
      appRoutes
      ),
    MDBBootstrapModule.forRoot(),
  ],

  exports: [CompanyComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
