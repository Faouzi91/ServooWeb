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
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



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
    HttpClientModule,
    InputsModule,
    WavesModule,
    ButtonsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      defaultLanguage: 'fr',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: true
    }),
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
        path: 'references',
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
  providers: [TranslateStore],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}